<?php
/**
 * Template Name: Главная страница
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package autoyurist
 */

get_header(); ?>

<main>

	<section class="main-screen">
		<div class="container">
			<div class="wrap clearfix">
				<div class="box-screen box-one">
					<a href="" class="btn-st left-side icon_health">
						<?php echo the_field('button1'); ?><span class="icon_text"></span>
					</a>
				</div>
				<div class="box-screen box-two">
					<a href="" class="btn-st icon_police right-side">
						<?php echo the_field('button2'); ?><span class="icon_text"></span>
					</a>
				</div>
				<div class="box-screen box-three">
					<a href="" class="btn-st icon_weight left-side">
						<?php echo the_field('button3'); ?><span class="icon_text"></span>
					</a>
				</div>
				<div class="box-screen box-four">
					<a href="" class="btn-st icon_cars right-side">
						<?php echo the_field('button4'); ?><span class="icon_text"></span>
					</a>
				</div>
				<?php echo the_field('phone-mobile'); ?>
			</div>
			<a href="<?php echo the_field('youtube-link'); ?>" class="btn-ytplay">смотреть видео</a>
		</div>
	</section>
	<div class="screen-header hide">
		<p>
			<span class="big-title">Пройдите тест</span>
			<?php echo the_field('test-title1'); ?>
		</p>
	</div>
	<div class="screen-header hide">
		<p>
			<span class="big-title">Пройдите тест</span>
			<?php echo the_field('test-title2'); ?>
		</p>
	</div>
	<div class="screen-header hide">
		<p>
			<span class="big-title">Пройдите тест</span>
			<?php echo the_field('test-title3'); ?>
		</p>
	</div>
	<div class="screen-header hide">
		<p>
			<span class="big-title">Пройдите тест</span>
			<?php echo the_field('test-title4'); ?>
		</p>
	</div>
	<section class="st-screen">
		<div class="container">
			<div class="st-list">
				<ul>
					<li><a class="st-list-link" href="#"><?php echo the_field('st1'); ?></a></li>
				</ul>
			</div>
			<div class="st-list list-indicator">
				<ul>
					<li><a class="st-list-link" href="#"><?php echo the_field('st2'); ?></a></li>
					<li><a class="st-list-link" href="#"><?php echo the_field('st3'); ?></a></li>
					<li><a class="st-list-link st-indicator-show" href="#"><?php echo the_field('st4'); ?></a></li>
					<li><a class="st-list-link" href="#"><?php echo the_field('st5'); ?></a></li>
				</ul>
			</div>
			<div class="st-list">
				<ul>
					<li><a class="st-list-link" href="#"><?php echo the_field('st6'); ?></a></li>
				</ul>
			</div>
			<div class="st-list">
				<ul>
					<li><a class="st-list-link" href="#"><?php echo the_field('st7'); ?></a></li>
				</ul>
			</div>
		</div>
	</section>
	<section class="test-screen health-screen">
		<div class="container">
			<div class="screen-title">
				<p>
					<?php echo the_field('st21'); ?>
				</p>
				<span class="screen-title-arr"></span>
			</div>
			<div class="screen-list">
				<div class="wrap-list_parents"></div>
				<?php echo the_field('test1'); ?>
			</div>
		</div>
	</section>
	<section class="test-screen police-screen">
		<div class="container">
			<div class="screen-title">
				<p>
					<?php echo the_field('st21'); ?>

				</p>
				<span class="screen-title-arr"></span>
			</div>
			<div class="screen-list">
				<div class="wrap-list_parents"></div>
				<?php echo the_field('test2'); ?>
			</div>
		</div>
	</section>
	<section class="test-screen police-screen">
		<div class="container">
			<div class="screen-title">
				<p>
					<?php echo the_field('st31'); ?>

				</p>
				<span class="screen-title-arr"></span>
			</div>
			<div class="screen-list">
				<div class="wrap-list_parents"></div>
				<?php echo the_field('test3'); ?>
			</div>
		</div>
	</section>
	<section class="test-screen police-screen">
		<div class="container">
			<div class="screen-title">
				<p>
					<?php echo the_field('st41'); ?>
				</p>
				<span class="screen-title-arr"></span>
			</div>
			<div class="screen-list">
				<div class="wrap-list_parents"></div>
				<?php echo the_field('test4'); ?>
			</div>
		</div>
	</section>
	<section class="test-screen police-screen">
		<div class="container">
			<div class="screen-title">
				<p>
					<?php echo the_field('st51'); ?>

				</p>
				<span class="screen-title-arr"></span>
			</div>
			<div class="screen-list">
				<div class="wrap-list_parents"></div>
				<?php echo the_field('test5'); ?>
			</div>
		</div>
	</section>
	<section class="test-screen weight-screen">
		<div class="container">
			<div class="screen-title">
				<p>
					<?php echo the_field('st61'); ?>

				</p>
				<span class="screen-title-arr"></span>
			</div>
			<div class="screen-list">
				<div class="wrap-list_parents"></div>
				<?php echo the_field('test6'); ?>
			</div>
		</div>
	</section>
	<section class="test-screen cars-screen">
		<div class="container">
			<div class="screen-title">
				<p>
					<?php echo the_field('st71'); ?>
				</p>
				<span class="screen-title-arr"></span>
			</div>
			<div class="screen-list">
				<div class="wrap-list_parents"></div>
				<?php echo the_field('test7'); ?>
			</div>
		</div>
	</section>
	<section class="result">
		<div class="container">
			<span class="screen-result fail">Вам нужно срочно обратиться к юристу</span>
			<span class="screen-result success">Поздравляем! У Вас есть шанс вернуть права!</span>
			<span class="screen-result success1">Поздравляем! У Вас есть шансы получить страховку!</span>
			<span class="screen-result success2">Поздравляем! У Вас есть шансы избежать наказания!</span>
			<button id="result-test" class="screen-result-btn" type="button" name="result">
				Проверить вероятность возврата прав
			</button>
			<button id="new-test" class="screen-result-btn" type="button" name="result">
				Вернуться на главную
			</button>
		</div>
	</section>
</main>

<?php
get_footer();
