<?php
/**
 * Plugin Name:       Team Members
 * Description:       A Team Members Grid.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Laura Lieknina
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members
 *
 * @package           learning-gutenberg
 */

function learning_gutenberg_team_members_init() {
	register_block_type_from_metadata( __DIR__ );

	wp_enqueue_style( 'team-members-style', plugins_url('build/style-index.css', __FILE__) );
}
add_action( 'init', 'learning_gutenberg_team_members_init' );
