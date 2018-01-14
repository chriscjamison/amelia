<?php
/**
 * Template part for displaying audio posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.2
 */

?>

<section id="section-<?php the_ID(); ?>">
<?php 
	if ( 'post' === get_post_type() ) :
		the_content();
	endif; 
?>		