<?php
/**
 * Template part for displaying content which appears at the top of the webpage of the One Page template.
 *
 * @package WordPress
 * @subpackage Amelia
 * @since 1.0
 * @version 1.0
 */

?>

				<div id="info">
				<?php
					if ( function_exists( 'the_custom_logo' ) ) {
							the_custom_logo();
					}

					if ( 'post' === get_post_type() ) :
						the_content();
					endif; 
				?>
				</div>