// // Import vendor jQuery plugin example
// import '~/app/libs/jquery/dist/jquery.min.js'
import '~/app/libs/mmenu-js-master/dist/mmenu.js'
import '~/app/libs/owlcarousel/dist/owl.carousel.min.js'
import '~/app/libs/selectize-js-master/dist/js/selectize.min.js'


document.addEventListener('DOMContentLoaded', () => {
	let hamburger = document.querySelector('.hamburger')
	new Mmenu( "#menu", {
		"navbars": [
			{
				"position": "bottom",
				"content": [
					"<a class='fa fa-instagram' href='https://instagram.com/t.a.n.y.sh.aa?igshid=djJnc2NiMjIzd2tp' target='_blank'></a>",
					"<a class='fa fa-vk' href='https://vk.com/tan89ya' target='_blank'></a>",
					"<a class='fa fa-whatsapp' href='https://wa.me/79533099770' target='_blank'></a>",
					"<a class='fa fa-telegram' href='https://t.me/+79533099770' target='_blank'></a>"
				]
			},
		],

		"navbar": {
			"title": '<img src="images/dist/logo.svg" alt="Салон красоты Butterfly">'
			},
		"theme": "white",
		"hooks": {
			"open:before": () => {
				hamburger.classList.add('is-active')
			},
			"close:after": () => {
				hamburger.classList.remove('is-active')
			}
		},
	});



	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:20,
			// nav:true,
			center: true,
			autoWidth:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				}
			}
		})
	});

	var owl = $('.owl-class');

	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});


	$('select').selectize({
		create: true,
		sortField: 'text'
	});

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css("display", "flex").hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	}); 

	
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.top').addClass("active");
		} else {
			$('.top').removeClass("active");
		};
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0});
	});

	$('.menu li').removeClass('active');
	var path = window.location.pathname;
	$('.menu li a').each(function() {
		var href = $(this).attr('href');
		if(path.slice(1).substring(0, href.length) === href) {
			$(this).parent('li').addClass('active');
		}
	});

	$(document).ready(function(){
		$(".nav-menu__services").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 500);
		});
	});



})
