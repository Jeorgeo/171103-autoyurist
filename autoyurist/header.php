<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package autoyurist
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-M6SPN45');</script>
	<!-- End Google Tag Manager -->
</head>
<body class="overflow">
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6SPN45"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
	<header class="main-header">
		<div class="container clearfix">
			<div class="header-logo">
				<a class="logo-box" href="index.html">
					<?php	the_custom_logo(); ?>
				</a>
			</div>
			<div class="header-title">
				<div class="contacts-box">
					<?php dynamic_sidebar( 'phone' ); ?>
					<p>
						Звонок по России бесплатный
					</p>
				</div>
				<div class="title-box">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<h1>АвторитетЪ <span>Юридический центр</span></h1>
					</a>
				</div>
			</div>
			<h2>
				Профессиональный <span class="color-text">Авто Юрист</span>
			</h2>
		</div>
	</header>
