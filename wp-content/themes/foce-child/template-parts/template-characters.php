<?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>

            <article id="characters">
                <div class="main-character">
                    <h3>Les personnages</h3>
                </div>
                <div class=" swiper">
                    <div class="swiper-wrapper">
                    <?php
                    while ( $characters_query->have_posts() ) {
                        $characters_query->the_post();
                        echo '<div class="swiper-slide"><figure>';
                        echo get_the_post_thumbnail( get_the_ID(), 'full' );
                        echo '<figcaption>';
                        the_title();
                        echo'</figcaption>';
                        echo '</figure></div>';
                    }
                    ?>
                    </div>
                </div>
            </article>