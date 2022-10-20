const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__list');

if(burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('active')
	})
}