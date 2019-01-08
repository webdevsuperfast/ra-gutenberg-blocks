<?php
/**
 * Plugin Name: RA Gutenberg Blocks
 * Plugin URI: https://github.com/webdevsuperfast/ra-gutenberg-blocks/
 * Description: A collection of custom Gutenberg blocks.
 * Author: Rotsen Mark Acob
 * Author URI: https://rotsenacob.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package RA Gutenberg Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
