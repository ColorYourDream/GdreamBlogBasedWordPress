<?php
$show_readmore=false;
$postformat = get_post_format();
if($postformat == "") $postformat="standard";

if ( ! is_single() ) {
switch ($postformat) {
	case 'link':
	$linked_to= get_post_meta($post->ID, MTHEME . '_meta_link', true);
	$fullcontent=true;		
	?>
	<div class="entry-post-title entry-post-title-only">
	<h2>
	<span class="postformat_<?php echo $postformat; ?>_icon postformat_icon">
	<a class="postformat_<?php echo $postformat; ?>" href="<?php echo esc_attr($linked_to); ?>" title="<?php echo esc_attr($linked_to); ?>"><?php the_title(); ?></a>
	</span>
	</h2>
	</div>
	<?php
	break;
	
	case 'gallery':
	$fullcontent=true;
	?>
	<div class="entry-post-title">
	<h2>
	<a class="postformat_<?php echo $postformat; ?>_icon postformat_icon postformat_<?php echo $postformat; ?>" href="<?php the_permalink() ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'mthemelocal' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
	</h2>
	</div>
	<?php
	break;
	
	case 'image':
	$fullcontent=true;
	?>
	<div class="entry-post-title">
	<h2>
	<a class="postformat_<?php echo $postformat; ?>_icon postformat_icon postformat_<?php echo $postformat; ?>" href="<?php the_permalink() ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'mthemelocal' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
	</h2>
	</div>
	<?php
	break;
	
	case 'video':
	$fullcontent=true;
	?>
	<div class="entry-post-title">
	<h2>
	<a class="postformat_<?php echo $postformat; ?>_icon postformat_icon ostformat_<?php echo $postformat; ?>" href="<?php the_permalink() ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'mthemelocal' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
	</h2>
	</div>
	<?php
	break;
	
	case 'aside':
	$quote=get_post_meta($post->ID, MTHEME . '_meta_quote', true);
	$fullcontent=true;
	?>
	<span class="postformat_<?php echo $postformat; ?>_icon postformat_<?php echo $postformat; ?>"></span>
	<?php
	break;
	
	case 'audio':
	$fullcontent=true;
	?>
	<div class="entry-post-title">
	<h2>
	<a class="postformat_<?php echo $postformat; ?>_icon postformat_icon postformat_<?php echo $postformat; ?>" href="<?php the_permalink() ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'mthemelocal' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
	</h2>
	</div>
	<?php
	break;
	
	case 'quote':
	$quote=get_post_meta($post->ID, MTHEME . '_meta_quote', true);
	$quote_author=get_post_meta($post->ID, MTHEME . '_meta_quote_author', true);
	$fullcontent=true;
	?>
	<span class="postformat_<?php echo $postformat; ?>_icon postformat_icon postformat_<?php echo $postformat; ?>"><?php echo $quote; ?></span>
	<?php if ($quote_author != "") { ?>
	<span class="quote_author"><?php echo "&#8212;&nbsp;" . $quote_author; ?></span>
	<?php } ?>
	<?php
	break;
	
	case 'standard':
	$fullcontent=true;
	?>
	<div class="entry-post-title">
	<h2>
	<a class="postformat_<?php echo $postformat; ?>_icon postformat_icon postformat_<?php echo $postformat; ?>" href="<?php the_permalink() ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'mthemelocal' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
	</h2>
	</div>
	<?php
	break;
	
	default:
	?>
	<div class="entry-post-title">
	<h2>
	<a class="postformat_<?php echo $postformat; ?>_icon postformat_<?php echo $postformat; ?>" href="<?php the_permalink() ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'mthemelocal' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
	</h2>
	</div>
	<?php
}
}
?>

<div class="entry-content postformat_<?php echo $postformat; ?>_contents clearfix">
<?php
if ( is_single() ) {

	echo '<div class="fullcontent-spacing">';
	echo '<article>';
	the_content();
	echo '</article>';
	echo '</div>';
	
} else {

	if ( of_get_option('postformat_fullcontent') ) {
	
		echo '<div class="postsummary-spacing">';
		global $more;
		$more = 0;
		the_content();
		echo '</div>';
		
	} else {
		
		echo '<div class="entry-content postformat_image_contents clearfix">';
		the_content();
		echo '</div>';
	}
}

if ( is_single() ) {
?>
	<?php edit_post_link( __('edit this entry','mthemelocal') ,'<p class="edit-entry">','</p>'); ?>	
	<?php
	if ( of_get_option('blog_postinfo') ) {
	?>
	<div class="postinfo">
		<p>本文章发表于 <?php the_time('Y年m月d日 H时i分') ?></p>
		<p>点击 <?php post_comments_feed_link('RSS 2.0');?> 订阅本文。</p>
		<?php the_tags( __('<p>标签: ','mthemelocal'), ', ', '</p>'); ?>
		<p>分类: <?php the_category(', ') ?></p>
		<div class="clear"></div>
		<?php if (function_exists('nrelate_related')) nrelate_related(); ?>
		<div id="ciphpshare">
			<a rel="nofollow" href="javascript:void((function(s,d,e){try{}catch(e){}var%20f='http://service.weibo.com/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(d.title),'&appkey=1392530042'].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));"><img src='<?php echo get_template_directory_uri(); ?>/images/sevenstar/weibo.png' alt='分享到新浪微博' border='0' width=20 height=20>分享到新浪微博</a>
			<a href="javascript:void(0)" onclick="{ var _t = encodeURI(document.title);  var _url = encodeURI(window.location); var _appkey = '333cf198acc94876a684d043a6b48e14'; var _site = encodeURI; var _pic = ''; var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic; window.open( _u,'转播到腾讯微博', 'width=700, height=580, top=180, left=320, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );  };" ><IMG border=0 alt=转播到腾讯微博 src="<?php echo get_template_directory_uri(); ?>/images/sevenstar/weiboicon24.png" width=16 height=16>转播到腾讯微博</a>
			<a href="javascript:void((function(s,d,e){if(/xiaonei\.com/.test(d.location))return;var%20f='http://share.xiaonei.com/share/buttonshare.do?link=',u=d.location,l=d.title,p=[e(u),'&amp;title=',e(l)].join('');function%20a(){if(!window.open([f,p].join(''),'xnshare',['toolbar=0,status=0,resizable=1,width=626,height=436,left=',(s.width-626)/2,',top=',(s.height-436)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();})(screen,document,encodeURIComponent));"><img src="<?php echo get_template_directory_uri(); ?>/images/sevenstar/Ball32.png" alt="分享到校内人人网" border="0" height="16" width="16">分享到人人网</a>
		</div>

	</div>
	<?php
	}
	?>
<?php
}
?>
</div>

<?php
if ( $show_readmore==true ) {
?>
	<div class="readmore_link">
	<a href="<?php the_permalink(); ?>"><?php echo of_get_option ( 'read_more' ); ?></a>
	</div>
<?php
}
?>