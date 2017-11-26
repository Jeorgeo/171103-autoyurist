<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package autoyurist
 */

?>

<footer>
	<div class="bottom-footer">
		<div class="container">
			<form class="cons" method="post">
				<!-- Hidden Required Fields -->
				<input type="hidden" name="project_name" value="Авторитет">
				<?php dynamic_sidebar( 'mail' ); ?>
				<input type="hidden" name="form_subject" value="Заявка с сайта.консультация">
				<!-- END Hidden Required Fields -->
				<label for="name" class="cons-name">
					<input id="name" type="text" name="name" placeholder="Введите имя">
				</label>
				<label for="phone" class="cons-phone">
					<input id="phone-c"  type="text" name="phone" placeholder="Введите телефон">
				</label>
				<button type="submit" name="submit" onclick="yaCounter46670718.reachGoal('CONSUL'); return true;">Получить консультацию</button>
				<div class="form__сonsent">
					<input id="сonsent-p" class="cloud-form__сonsent" type="checkbox" name="сonsent" checked required>
					<label class="cloud" for="сonsent-p">
						<a class="linkPolicy" href="autoyurist-confidencialnost.pdf" target="_blank">Согласие на обработку персональных данных</a>
					</label>
				</div>
			</form>
		</div>
	</div>
	<div class="footer-line"></div>
</footer>
<!-- popup form -->

<div class="wrap-win"></div>
<div id="window" class="popup-question">
	<div class="red-title">
		<div class="popup-question-close">
			close
		</div>
		<h5>
			Введите номер телефона для продолжения теста
		</h5>
	</div>
	<div class="details-form">
		<form id="js_form" method="post" class="order-form">
			<!-- Hidden Required Fields -->
			<input type="hidden" name="project_name" value="Авторитет">
			<!--<input type="hidden" name="admin_email" value="yu.sh.2583@gmail.com">!-->
			<?php dynamic_sidebar( 'mail' ); ?>
			<input type="hidden" name="form_subject" value="Заявка с сайта.Продолжить тест">
			<!-- END Hidden Required Fields -->
			<label for="phone" class="form__phone">
				<input id="phone" class="form__phone" type="text" name="phone"
				value="" placeholder="Введите номер" required>
			</label>
			<div class="box-form">
				<button id="submit" class="form__submit" type="submit" name="submit" onclick="yaCounter46670718.reachGoal('TEST'); return true;">
					Продолжить тест
				</button>
				<div class="form__сonsent">
					<input id="сonsent-p" class="cloud-form__сonsent" type="checkbox" name="сonsent" checked required>
					<label class="cloud" for="сonsent-p">
						<a class="linkPolicy" href="autoyurist-confidencialnost.pdf" target="_blank">Согласие на обработку персональных данных</a>
					</label>
				</div>
			</div>
		</form>
	</div>
</div>
<div id="video" class="popup-question-video">
	<div class="popup-video-close">
		close
	</div>
</div>
<div id="policy" class="popup-question-policy">
	<div class="popup-policy-close">
		close
	</div>
	<?php dynamic_sidebar( 'policy' ); ?>
</div>

<?php wp_footer(); ?>

</body>
</html>
