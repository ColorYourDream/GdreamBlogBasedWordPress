<?php
/*
*  Search Page
*/
?>
 
<?php get_header(); ?>
<?php
global $pagelayout_type;
$pagelayout_type="two-column";
?>
<h1 class="entry-title">
	<?php printf( __( '搜索结果: %s', 'mthemelocal' ), '<span>' . get_search_query() . '</span>' ); ?>
</h1>
	<?php if ( have_posts() ) : ?>

	<div class="contents-wrap float-left two-column">

		<?php
			get_template_part( 'loop', 'search' );
		?>
	</div>
	<?php else : ?>
	<div class="page-contents-wrap float-left two-column">
		<div class="entry-wrapper lower-padding">
		<div class="entry-spaced-wrapper">

			<div class="entry-content">
				<h2>未找到</h2>
				<p>抱歉，您所查找的文章不存在。</p>
			</div><!-- .entry-content -->
		</div>
		</div>
	</div>

	<?php endif; ?>


<?php get_sidebar(); ?>

<?php get_footer(); ?>