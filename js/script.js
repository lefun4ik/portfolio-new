const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__list');
const body = document.body;

if(burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			burger.classList.toggle('active')
			menu.classList.toggle('active')
			body.classList.toggle('lock');
		})
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__list')) {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('lock')
		}
	})
}

// Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', e => {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})