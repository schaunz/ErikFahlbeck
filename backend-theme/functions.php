<?php

function remove_admin_stuff() {
    remove_post_type_support('page', 'editor');
}


add_action('admin_enqueue_scripts', 'remove_admin_stuff');
?>