const burger = document.querySelector('.js-burger');
const openMenu = document.querySelector('.js-nav');

burger.addEventListener('click', function(){
	burger.classList.toggle('_active');
	openMenu.classList.toggle('_active');
})