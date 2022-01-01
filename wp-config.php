<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

/**
 * Database connection information is automatically provided.
 * There is no need to set or change the following database configuration
 * values:
 *   DB_HOST
 *   DB_NAME
 *   DB_USER
 *   DB_PASSWORD
 *   DB_CHARSET
 *   DB_COLLATE
 */

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */

define('AUTH_KEY',         'nmWMYgRP*@mSC7f+tw|4HphtR=rfxh?d|*N|z[n1L*Xd|[;~Q%G#jq$.2=*tY[,i');
define('SECURE_AUTH_KEY',  'qWsBXnrwAgo7Gmep5_}UIbT2+<_zwy5J<wa#JB*D;-}=teurKC.r3+Tl;Ni|!sP,');
define('LOGGED_IN_KEY',    'jX>IEe$Y*P$j[AM_n5s0rZ$=m*<aFf%E8[5-qexs;Mgv8q[<Bv(jL}uClP2_A.1Y');
define('NONCE_KEY',        'I{7U!@?^aW_?2H=l=7(3oJndQxd5u)7nUtOrr-wmsi}_L6J0l<rE2~Y.e[PwI3.8');
define('AUTH_SALT',        'f+J;:l1{6f4HEP-<9kiq%dH{TZ6]v4tvyalTd-D;m)~VH}{<XyoiAi:UV?2]Py+z');
define('SECURE_AUTH_SALT', 'lg=E+TfBujmZ>av*^*8;CrP@mQOBJ+AyD=eCF]Yu:]b#o+*<fC*CrEa{{r{4rWWE');
define('LOGGED_IN_SALT',   '$1YKfa(fZ7yb^w.-yK}0}D[]V8)crwb!3}q>!C3;36,KpYN.$]BxgBROlrQ<SjWD');
define('NONCE_SALT',       'a<n${4VwfqS9SJ9Ljc<k.(ezw]EIw.In.@)qGiO*c.Z}qhfcf!FBdShZi9+(?1<{');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
  define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
