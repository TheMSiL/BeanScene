const slider = () => {
	const sliderContent = document.querySelectorAll(
		'.feedback_info-slider--content'
	);
	const leftBtn = document.querySelector('.feedback_info-slider--btnL');
	const rightBtn = document.querySelector('.feedback_info-slider--btnR');

	let currentSlide = 0;

	function showSlide(index, direction) {
		sliderContent.forEach(slide => {
			slide.classList.add('hide');
			slide.classList.remove('animate__slideInRight');
			slide.classList.remove('animate__slideInLeft');
		});

		sliderContent[index].classList.remove('hide');

		if (direction === 'right') {
			sliderContent[index].classList.add('animate__slideInRight');
		} else if (direction === 'left') {
			sliderContent[index].classList.add('animate__slideInLeft');
		}
	}

	leftBtn.addEventListener('click', () => {
		currentSlide--;
		if (currentSlide < 0) {
			currentSlide = sliderContent.length - 1;
		}
		showSlide(currentSlide, 'left');
	});

	rightBtn.addEventListener('click', () => {
		currentSlide++;
		if (currentSlide >= sliderContent.length) {
			currentSlide = 0;
		}
		showSlide(currentSlide, 'right');
	});

	showSlide(currentSlide);
};

slider();

const scrollToTop = () => {
	const scrollBtn = document.querySelector('.scroll');

	const scrollTop = position => {
		window.scrollTo({
			top: position,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', () => {
		if (window.scrollY <= 950) {
			scrollBtn.style.display = 'none';
		} else {
			scrollBtn.style.display = 'block';
		}
	});

	scrollBtn.addEventListener('click', () => scrollTop(0));
};

scrollToTop();

const scrollToSection = () => {
	const navItems = document.querySelectorAll('.nav_list-item');

	navItems.forEach(item => {
		item.addEventListener('click', scrollSection);
	});

	function scrollSection(event) {
		event.preventDefault();

		const target = event.target.getAttribute('href');

		const targetPosition = document.querySelector(target).offsetTop;

		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth',
		});
	}
};

scrollToSection();

const handleScroll = () => {
	const aboutContent = document.querySelector('.about_content');
	const aboutCup = document.querySelector('.about_cup');
	const coffeeLeft = document.querySelector('.coffee_left');
	const products = document.querySelector('.products');
	const coffeeRight = document.querySelector('.coffee_right');
	const advantages = document.querySelector('.advantages');
	const orderContent = document.querySelector('.orderContent');
	const orderBean = document.querySelector('.order_bean');
	const orderCup = document.querySelector('.order_cup');
	const feedbackTitle = document.querySelector('.feedback_title');
	const feedbackR = document.querySelector('.feedback_R');
	const feedbackL = document.querySelector('.feedback_L');
	const subscribeContent = document.querySelector('.subscribeContent');
	const cupR = document.querySelector('.cupR');
	const cupL = document.querySelector('.cupL');
	const sliderContent = document.querySelector(
		'.feedback_info-slider--content'
	);

	const animateElements = [
		{
			el: aboutContent,
			animateClass: 'animate__fadeInDown',
		},
		{
			el: aboutCup,
			animateClass: 'animate__slideInRight',
		},
		{
			el: coffeeLeft,
			animateClass: 'animate__slideInLeft',
		},
		{
			el: products,
			animateClass: 'animate__zoomInDown',
		},
		{
			el: coffeeRight,
			animateClass: 'animate__slideInRight',
		},
		{
			el: advantages,
			animateClass: 'animate__fadeInBottomLeft',
		},
		{
			el: orderContent,
			animateClass: 'animate__slideInLeft',
		},
		{
			el: orderBean,
			animateClass: 'animate__fadeInRight',
		},
		{
			el: orderCup,
			animateClass: 'animate__bounceInRight',
		},
		{
			el: feedbackTitle,
			animateClass: 'animate__flipInX',
		},
		{
			el: feedbackR,
			animateClass: 'animate__slideInRight',
		},
		{
			el: feedbackL,
			animateClass: 'animate__slideInLeft',
		},
		{
			el: subscribeContent,
			animateClass: 'animate__fadeInDown',
		},
		{
			el: cupL,
			animateClass: 'animate__slideInLeft',
		},
		{
			el: cupR,
			animateClass: 'animate__slideInRight',
		},
		{
			el: sliderContent,
			animateClass: 'animate__backInUp',
		},
	];

	animateElements.forEach(({ el, animateClass }) => {
		const elementPosition = el.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		if (elementPosition < windowHeight) {
			el.classList.add(animateClass);
		}
	});
};

window.addEventListener('scroll', handleScroll);

const burgerMenu = () => {
	const burger = document.querySelector('.burger');
	const overlay = document.querySelector('.overlay');

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		overlay.style.display = 'flex';

		if (!burger.classList.contains('active')) {
			overlay.style.transform = 'translateX(-100%)';
		} else {
			setTimeout(() => {
				overlay.style.transform = 'translateX(0)';
			}, 0);
		}
	});
};

burgerMenu();
