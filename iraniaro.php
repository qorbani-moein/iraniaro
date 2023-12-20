<?PHP

/**
 * Plugin Name: iraniaro - Option
 * Plugin URI:  https://moeinqorbani.ir
 * Description: All Option of Your Site
 * Version:     0.1
 * Author:      Moein Qorbani
 * Author URI:  https://moeinqorbani.ir
 * Text Domain: iraniaro-product
 * License: GPLv3
 */


 
if (!defined('ABSPATH')) {
    die('-1');
}


add_action('wp_footer', 'query_page_footer');

function query_page_footer()
{

    $current_page = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $page_home = 'https://' . $_SERVER['SERVER_NAME'] . '/';

    // console('hi');
    if ($current_page == $page_home) {
        console('page_home');
    } 
    // elseif($products == substr($current_page,0,strlen($products))){
    //     console('page_products');
    //     products_html();
    // }
    html();
    
}

function html(){
    console('html.js');
    include("inc/html.js");

    if (is_user_logged_in()) {
        $user_data = wp_get_current_user();
        echo '<input id="user_display_name" value="' . esc_attr($user_data->display_name) . '" hidden>';
    }
    
}

function console($str)
{
    echo '
    <script>
        console.log("moein - ' . $str  . '");
    </script>
    ';
}
