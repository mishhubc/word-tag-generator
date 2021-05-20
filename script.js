const hamburgerMenu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
const navBar = document.querySelector('.main-nav__container');
const sideBar = document.querySelector('.sidebar');

hamburgerMenu.addEventListener('click', () => {
	container.classList.toggle('change');
});

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		navBar.style.backgroundColor = '#fff';
		navBar.style.transition = 'all 0.5s ease-out';
	} else {
		navBar.style.backgroundColor = 'transparent';
	}
}
