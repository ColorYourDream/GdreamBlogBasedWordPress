<?php
/*
404 Page
*/
?>
 
<?php get_header(); ?>
<h1 class="entry-title">
	<?php _e( '404 Page not found', 'mthemelocal' ); ?>
</h1>
<div class="page-contents-wrap float-left two-column">
	<div class="entry-wrapper lower-padding">
	<div class="entry-spaced-wrapper">

		<div class="entry-content clearfix">
		<h4><?php _e( 'Try searching...', 'mthemelocal' ); ?></h4>
			<?php get_search_form(); ?>
		</div><!-- .entry-content -->
	</div>
	</div>
</div>
<?php get_sidebar(); ?>

<?php get_footer(); ?>