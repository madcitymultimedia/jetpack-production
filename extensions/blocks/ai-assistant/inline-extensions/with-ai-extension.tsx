/*
 * External dependencies
 */
import {
	ERROR_NETWORK,
	ERROR_QUOTA_EXCEEDED,
	useAiSuggestions,
} from '@automattic/jetpack-ai-client';
import { BlockControls, useBlockProps } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select, useDispatch } from '@wordpress/data';
import { useCallback, useEffect, useState, useRef } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import debugFactory from 'debug';
import React from 'react';
/*
 * Internal dependencies
 */
import { EXTENDED_INLINE_BLOCKS } from '../extensions/ai-assistant';
import { BuildPromptOptionsProps, buildPromptForExtensions } from '../lib/prompt';
import { blockHandler } from './block-handler';
import AiAssistantInput from './components/ai-assistant-input';
import AiAssistantExtensionToolbarDropdown from './components/ai-assistant-toolbar-dropdown';
import { isPossibleToExtendBlock } from './lib/is-possible-to-extend-block';
/*
 * Types
 */
import type {
	AiAssistantDropdownOnChangeOptionsArgProps,
	OnRequestSuggestion,
} from '../components/ai-assistant-toolbar-dropdown/dropdown-content';
import type { ExtendedInlineBlockProp } from '../extensions/ai-assistant';
import type { PromptTypeProp } from '../lib/prompt';

const debug = debugFactory( 'jetpack-ai-assistant:extensions:with-ai-extension' );

// HOC to populate the block's edit component with the AI Assistant bar and button.
const blockEditWithAiComponents = createHigherOrderComponent( BlockEdit => {
	return props => {
		const { clientId, isSelected, name: blockName } = props;
		const controlRef: React.MutableRefObject< HTMLDivElement | null > = useRef( null );
		const controlObserver = useRef< ResizeObserver | null >( null );
		const blockStyle = useRef< string >( '' );
		const [ action, setAction ] = useState< string >( '' );

		// Only extend the allowed block types.
		const possibleToExtendBlock = isPossibleToExtendBlock( {
			blockName,
			clientId,
		} );

		const [ showAiControl, setShowAiControl ] = useState( false );

		const { getCurrentPostId } = select( 'core/editor' );
		const postId = getCurrentPostId();

		const { increaseAiAssistantRequestsCount } = useDispatch( 'wordpress-com/plans' );

		const onDone = useCallback( () => {
			increaseAiAssistantRequestsCount();
		}, [ increaseAiAssistantRequestsCount ] );

		const onError = useCallback(
			error => {
				// Increase the AI Suggestion counter only for valid errors.
				if ( error.code === ERROR_NETWORK || error.code === ERROR_QUOTA_EXCEEDED ) {
					return;
				}

				increaseAiAssistantRequestsCount();
			},
			[ increaseAiAssistantRequestsCount ]
		);

		// Data and functions with block-specific implementations.
		const { onSuggestion, getContent } = blockHandler( blockName, clientId );

		const {
			request,
			stopSuggestion,
			requestingState,
			error,
			suggestion,
			reset: resetSuggestions,
		} = useAiSuggestions( {
			onSuggestion,
			onDone,
			onError,
			askQuestionOptions: {
				postId,
				feature: 'ai-assistant',
			},
		} );

		const { id } = useBlockProps();

		useEffect( () => {
			const block = document.getElementById( id );

			if ( ! block ) {
				return;
			}

			// Once when the AI Control is displayed
			if ( showAiControl && ! controlObserver.current && controlRef.current ) {
				// Save the block and control styles to adjust them later.
				blockStyle.current = block.style.cssText;

				// Observe the control's height to adjust the block's bottom-padding.
				controlObserver.current = new ResizeObserver( ( [ entry ] ) => {
					const { height } = entry.contentRect;

					if ( block && controlRef.current && height > 0 ) {
						block.style.paddingBottom = `${ height + 16 }px`;
						controlRef.current.style.marginTop = `-${ height }px`;
					}
				} );

				controlObserver.current.observe( controlRef.current );
			} else if ( controlObserver.current ) {
				// Reset the block's bottom-padding.
				block.setAttribute( 'style', blockStyle.current );

				controlObserver.current.disconnect();
				controlObserver.current = null;
			}
		}, [ clientId, controlObserver, id, showAiControl ] );

		// Only extend the target block.
		if ( ! possibleToExtendBlock ) {
			return <BlockEdit { ...props } />;
		}

		// Defines where the block controls should be placed in the toolbar
		const blockControlsProps = {
			group: 'block' as const,
		};

		const onAskAiAssistant = () => {
			setShowAiControl( true );
		};

		const getRequestMessages = ( {
			promptType,
			options,
			userPrompt,
		}: {
			promptType: PromptTypeProp;
			options?: AiAssistantDropdownOnChangeOptionsArgProps;
			userPrompt?: string;
		} ) => {
			const blockContent = getContent();

			const promptOptions: BuildPromptOptionsProps = {
				tone: options?.tone,
				language: options?.language,
				fromExtension: true,
			};

			return buildPromptForExtensions( {
				blockContent,
				options: promptOptions,
				type: promptType,
				userPrompt,
			} );
		};

		const onRequestSuggestion: OnRequestSuggestion = ( promptType, options, humanText ) => {
			setShowAiControl( true );

			if ( humanText ) {
				setAction( humanText );
			}

			const messages = getRequestMessages( { promptType, options } );

			debug( 'onRequestSuggestion', promptType, options );

			request( messages );
		};

		const onClose = useCallback( () => {
			setShowAiControl( false );
			resetSuggestions();
			setAction( '' );
		}, [ resetSuggestions ] );

		const onUserRequest = ( userPrompt: string ) => {
			const promptType = 'userPrompt';
			const options = {};
			const messages = getRequestMessages( { promptType, options, userPrompt } );

			request( messages );
		};

		// Close the AI Control if the block is deselected.
		useEffect( () => {
			if ( ! isSelected ) {
				onClose();
			}
		}, [ isSelected, onClose ] );

		const onUndo = () => {
			// TODO: handle the undo action.
			debug( 'onUndo' );
		};

		return (
			<>
				<BlockEdit { ...props } />

				{ showAiControl && (
					<AiAssistantInput
						clientId={ clientId }
						postId={ postId }
						requestingState={ requestingState }
						requestingError={ error }
						suggestion={ suggestion }
						wrapperRef={ controlRef }
						action={ action }
						request={ onUserRequest }
						stopSuggestion={ stopSuggestion }
						close={ onClose }
						undo={ onUndo }
					/>
				) }

				<BlockControls { ...blockControlsProps }>
					<AiAssistantExtensionToolbarDropdown
						blockType={ blockName }
						onAskAiAssistant={ onAskAiAssistant }
						onRequestSuggestion={ onRequestSuggestion }
					/>
				</BlockControls>
			</>
		);
	};
}, 'blockEditWithAiComponents' );

/**
 * Function used to extend the registerBlockType settings.
 * Populates the block edit component with the AI Assistant bar and button.
 * @param {object} settings - The block settings.
 * @param {string} name     - The block name.
 * @returns {object}          The extended block settings.
 */
function blockWithInlineExtension( settings, name: ExtendedInlineBlockProp ) {
	// Only extend the allowed block types.
	if ( ! EXTENDED_INLINE_BLOCKS.includes( name ) ) {
		return settings;
	}

	return {
		...settings,
		edit: blockEditWithAiComponents( settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'jetpack/ai-assistant-support/with-ai-extension',
	blockWithInlineExtension,
	100
);
