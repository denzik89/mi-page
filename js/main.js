$(function () {
	$('.banner-section__slider').slick({
		dots: true,
		prevArrow: '<button class="banner-section__slider__btn banner-section__arrow-left"><img src="img/arrow-left.svg" alt=""</button>',
		nextArrow: '<button class="banner-section__slider__btn banner-section__arrow-right"><img src="img/arrow-right.svg" alt=""</button>',

		responsive: [
			{
				breakpoint: 969,
				settings: {
					arrows: false
				}
			},

		]
	});



	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).closest('.tabs__wrapper').siblings().find('div')).removeClass('tabs__content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs__content--active');

		$('.product-slider').slick('setPosition');
	});



	$('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--active');
	});

	$('.product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="product-slider__slider__btn product-slider__arrow-left"><img src="img/arrow-black-left.svg" alt=""</button>',
		nextArrow: '<button class="product-slider__slider__btn product-slider__arrow-right"><img src="img/arrow-black-right.svg" alt=""</button>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 1201,
				settings: {
					arrows: false,
					slidesToShow: 3,
					dots: true
				}
			},
			{
				breakpoint: 870,
				settings: {
					arrows: false,
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 590,
				settings: {
					arrows: false,
					slidesToShow: 1,
					dots: true
				}
			}

		]
	});


	$('.filter-style').styler();

	$('.filter__item-drop, .filter-extra').on('click', function () {
		$(this).toggleClass('filter__item-drop--active');
		$(this).next().slideToggle('200');
	});


	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 100000,
		max: 500000
	});


	$('.catalog__filter-btngrid').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
		$('.product-item__wrapper ').removeClass('product-item__wrapper--list');
	});


	$('.catalog__filter-btnline').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
		$('.product-item__wrapper').addClass('product-item__wrapper--list');
	});


	$('.menu__burger').on('click', function () {
		$('.menu-mobile__list').toggleClass('menu-mobile__list--active');
	});

	$('.aside__btn').on('click', function () {
		$('.catalog__inner-aside ').slideToggle();
	})


});




//prevArrow: '<button class="banner-section__slider__btn banner-section__arrow-left"><img src="img/arrow-left.svg" alt=""</button>',
//nextArrow: '<button class="banner-section__slider__btn banner-section__arrow-right"><img src="img/arrow-right.svg" alt=""</button>	