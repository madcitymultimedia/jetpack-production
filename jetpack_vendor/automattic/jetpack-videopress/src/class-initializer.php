<?php
/**
 * The initializer class for the videopress package
 *
 * @package automattic/jetpack-videopress
 */

namespace Automattic\Jetpack\VideoPress;

use Automattic\Jetpack\Assets;
use Automattic\Jetpack\Connection\Initial_State as Connection_Initial_State;

/**
 * Initialized the VideoPress package
 */
class Initializer {

	const JETPACK_VIDEOPRESS_PKG_NAMESPACE = 'jetpack-videopress-pkg';

	/**
	 * Invoke this method to initialize the VideoPress package
	 *
	 * @return void
	 */
	public static function init() {
		if ( ! did_action( 'videopress_init' ) ) {

			self::unconditional_initialization();

			if ( Status::is_active() ) {
				self::active_initialization();
			}
		}

		/**
		 * Fires after the VideoPress package is initialized
		 *
		 * @since 0.1.1
		 */
		do_action( 'videopress_init' );
	}

	/**
	 * Initialize VideoPress features that should be initialized whenever VideoPress is present, even if the module is not active
	 *
	 * @return void
	 */
	private static function unconditional_initialization() {
		require_once __DIR__ . '/utility-functions.php';

		// Set up package version hook.
		add_filter( 'jetpack_package_versions', __NAMESPACE__ . '\Package_Version::send_package_version_to_tracker' );

		Module_Control::init();
		new WPCOM_REST_API_V2_Endpoint_VideoPress();
		if ( is_admin() ) {
			AJAX::init();
		}
	}

	/**
	 * Initialize VideoPress features that should be initialized only when the module is active
	 *
	 * @return void
	 */
	private static function active_initialization() {
		Attachment_Handler::init();
		Jwt_Token_Bridge::init();
		self::register_oembed_providers();
	}

	/**
	 * Explicitly register VideoPress oembed provider for patterns not supported by core
	 *
	 * @return void
	 */
	public static function register_oembed_providers() {
		$host = rawurlencode( home_url() );
		// videopress.com/v is already registered in core.
		// By explicitly declaring the provider here, we can speed things up by not relying on oEmbed discovery.
		wp_oembed_add_provider( '#^https?://video.wordpress.com/v/.*#', 'https://public-api.wordpress.com/oembed/?for=' . $host, true );
		// This is needed as it's not supported in oEmbed discovery
		wp_oembed_add_provider( '|^https?://v\.wordpress\.com/([a-zA-Z\d]{8})(.+)?$|i', 'https://public-api.wordpress.com/oembed/?for=' . $host, true ); // phpcs:ignore WordPress.WP.CapitalPDangit.Misspelled

		add_filter( 'embed_oembed_html', array( __CLASS__, 'video_enqueue_bridge_when_oembed_present' ), 10, 4 );
	}

	/**
	 * Enqueues VideoPress token bridge when a VideoPress oembed is present on the current page.
	 *
	 * @param string|false $cache   The cached HTML result, stored in post meta.
	 * @param string       $url     The attempted embed URL.
	 * @param array        $attr    An array of shortcode attributes.
	 * @param int          $post_ID Post ID.
	 *
	 * @return string|false
	 */
	public static function video_enqueue_bridge_when_oembed_present( $cache, $url, $attr, $post_ID ) { // phpcs:ignore VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
		if ( preg_match( '/^https?:\/\/(video\.wordpress\.com|videopress\.com)\/(v|embed)\//', $url ) // phpcs:ignore WordPress.WP.CapitalPDangit.Misspelled
			|| preg_match( '|^https?://v\.wordpress\.com/([a-zA-Z\d]{8})(.+)?$|i', $url ) ) { // phpcs:ignore WordPress.WP.CapitalPDangit.Misspelled
			Jwt_Token_Bridge::enqueue_jwt_token_bridge();
		}
		return $cache;
	}

	/**
	 * Enqueue plugin admin scripts and styles.
	 */
	public static function enqueue_admin_scripts() {
		Assets::register_script(
			self::JETPACK_VIDEOPRESS_PKG_NAMESPACE,
			'../build/admin/index.js',
			__FILE__,
			array(
				'in_footer'  => true,
				'textdomain' => 'jetpack-videopress-pkg',
			)
		);
		Assets::enqueue_script( self::JETPACK_VIDEOPRESS_PKG_NAMESPACE );

		// Initial JS state including JP Connection data.
		wp_add_inline_script( self::JETPACK_VIDEOPRESS_PKG_NAMESPACE, Connection_Initial_State::render(), 'before' );
		wp_add_inline_script( self::JETPACK_VIDEOPRESS_PKG_NAMESPACE, self::render_initial_state(), 'before' );
	}

	/**
	 * Render the initial state into a JavaScript variable.
	 *
	 * @return string
	 */
	public static function render_initial_state() {
		return 'var jetpackVideoPressInitialState=JSON.parse(decodeURIComponent("' . rawurlencode( wp_json_encode( self::initial_state() ) ) . '"));';
	}

	/**
	 * Get the initial state data for hydrating the React UI.
	 *
	 * @return array
	 */
	public static function initial_state() {
		return array(
			'apiRoot'           => esc_url_raw( rest_url() ),
			'apiNonce'          => wp_create_nonce( 'wp_rest' ),
			'registrationNonce' => wp_create_nonce( 'jetpack-registration-nonce' ),
		);
	}

	/**
	 * Register the VideoPress block editor block
	 *
	 * @return void
	 */
	public static function register_videopress_block() {
		register_block_type( __DIR__ . '/client/block-editor/blocks/videopress/' );
	}
}
