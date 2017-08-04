<?php
    echo '<div class="related"><div class="related_post"><h3>看过本文的还看了</h3><ul>';
    $tags = wp_get_post_tags($post->ID);
    if ($tags) {
        $tag_ids = array();
        foreach($tags as $individual_tag) $tag_ids[] = $individual_tag->term_id; 
        $args=array(
            'tag__in' => $tag_ids,
            'post__not_in' => array($post->ID),
            'showposts' => 4, 
            'caller_get_posts' => 1,
            'orderby' => rand
        );
        $my_query = new wp_query($args);
        if( $my_query->have_posts() ) {
            while ($my_query->have_posts()) {
                $my_query->the_post();
            ?>
                <li><a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></li>
            <?php
            }
        } 
    }else{
        echo"没有相关文章";
    } 
    echo '</ul></div></div>';
    wp_reset_query(); 
?>