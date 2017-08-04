<div class="postsummarywrap">
	<div class="datecomment">
		<span class="posted-date">
			<a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'mthemelocal' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark">
		<?php the_time('Y年m月d日') ?>
			</a>
		</span>
		<span class="comments">
			<?php comments_popup_link('0', '1', '%'); ?>
		</span>
	
	</div>
</div>