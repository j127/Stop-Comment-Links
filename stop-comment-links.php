<?php
/*
Plugin Name: Stop Comment Links
Plugin URI:  http://github.com/j127
Description: Discourages posting links in WordPress comment textarea
Version:     0.0.1
Author:      j127
Author URI:  http://github.com/j127
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html


Stop Comment Links is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Stop Comment Links is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stop Comment Links. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function ncl_add_scripts() {
	wp_register_script('stop_comment_links', plugins_url( 'script.js', __FILE__ ), array( 'jquery' ), '0.0.1', true);
	wp_enqueue_script('stop_comment_links');
}

add_action( 'wp_enqueue_scripts', 'ncl_add_scripts' );
