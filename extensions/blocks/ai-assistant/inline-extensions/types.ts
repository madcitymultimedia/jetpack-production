/**
 * Types
 */
import type { Block } from '@automattic/jetpack-ai-client';

export type OnSuggestion = ( suggestion: string ) => void;

export interface IBlockHandler {
	onSuggestion: OnSuggestion;
	getContent: () => string;
}

export type BlockEditorSelect = {
	getBlock: ( clientId: string ) => Block;
};
