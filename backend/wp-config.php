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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'efutredningar_sewordpress' );

/** MySQL database username */
define( 'DB_USER', 'efutredningar_sewordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'I!smFkdYj3TkHAA1WZC8' );

/** MySQL hostname */
define( 'DB_HOST', 'efutredningar.se.mysql.service.one.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'r1c-A5NOPgo8Ja8qO-xKbmsaJJy2cCHyj5oysvLN69w=' );
define( 'SECURE_AUTH_KEY',  '5aO3QqC17TyuWmh6xwmPyYLBvreGWV_6kqOh7kRjWSU=' );
define( 'LOGGED_IN_KEY',    'OqaohC9SWLiycdcuea3RCHeG9jhnorsBOXa3N4Fd62k=' );
define( 'NONCE_KEY',        '34yQvxt9qlr2H57-t7omBCRtdeWxCXnEnHglF1OqeiQ=' );
define( 'AUTH_SALT',        'KWrnNSnxRgr8bMXvqxxKkHAqy0y9CMQ6es08cjXzM1Q=' );
define( 'SECURE_AUTH_SALT', 'IqahPTYFxI1_PP_so-oAMkvt035rsTNyAi4meCD8jf4=' );
define( 'LOGGED_IN_SALT',   'a4K3qtIks_CkUWEzPuk22nId_HoOkr3pR_-1N9tTl_c=' );
define( 'NONCE_SALT',       'Oe3rWGKpiIMvUyUZ9JnS-0J5INCmOU8e4qRP4e1VaPU=' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'admin_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define( 'WPLANG', 'sv_SE' );

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
define( 'WP_DEBUG', false );

/**
 * Prevent file editing from WP admin.
 * Just set to false if you want to edit templates and plugins from WP admin.
 */
define('DISALLOW_FILE_EDIT', true);

/**
 * API for One.com wordpress themes and plugins
 */
define('ONECOM_WP_ADDONS_API', 'https://wpapi.one.com');

/** 
 * Client IP for One.com logs
 */
if (getenv('HTTP_CLIENT_IP')){$_SERVER['ONECOM_CLIENT_IP'] = @getenv('HTTP_CLIENT_IP');}
else if(getenv('REMOTE_ADDR')){$_SERVER['ONECOM_CLIENT_IP'] = @getenv('REMOTE_ADDR');}
else{$_SERVER['ONECOM_CLIENT_IP']='0.0.0.0';}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
