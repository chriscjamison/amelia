<?php
/**
 * The header for Amelia
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
	</head>

	<body>
<?php if ( has_nav_menu( 'top' ) ) : ?>
		<!-- INTERSECTION NAVIGATION -->
		<nav>
<?php 
	// Primary navigation menu.
	wp_nav_menu( array(
		'menu_class'     => 'nav-menu',
		'theme_location' => 'primary',
	) );
?>			
			<div id="nav-bkgrnd">
				<div id="nav-brdr"></div>
			</div>
		</nav>
<?php endif; ?>
		<div id="cntainr">