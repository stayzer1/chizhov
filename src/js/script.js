const elms = document.getElementsByClassName( 'splide');


for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ], {
    gap: '30px',
    speed: '1000',
    autoHeight: true,
    pagination: false,
    type: 'loop',
    breakpoints: {
      480: {
        arrows: false,
        pagination: true
      },
      320: {
        pagination: true
      }
    }
  } ).mount();
}
const hamburger = document.querySelector('.promo__menu-hamburger');
const menu = document.querySelector('.promo__menu-list');

if (hamburger !== null) {
  hamburger.addEventListener('click', function(e) {
    menu.classList.toggle('active')
  })
};
const modalBackground = document.querySelector('.modal');
const openModalBtns = document.querySelectorAll('.form-order__button');
const closeModalBtn = document.querySelector('.form-order__close')
const body = document.body;
function disableScroll() {
  let pagePosition = window.scrollY;
  document.body.classList.add('disable-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
}
function enableScroll() {
  let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
}

for (let openModalBtn of openModalBtns ) {
  openModalBtn.addEventListener('click', () => {
  modalBackground.classList.toggle('modal__active')
  disableScroll()
  if (menu !== null) {
    menu.classList.remove('active')
  }
});
}


modalBackground.addEventListener('click', (event) => {
  if (event.target === modalBackground) {
    modalBackground.classList.remove('modal__active')
  }
  enableScroll();
});
closeModalBtn.addEventListener('click', () => {
  modalBackground.classList.remove('modal__active')
  enableScroll();
});
