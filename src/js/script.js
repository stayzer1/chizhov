/* слайдер */
const elms = document.getElementsByClassName( 'splide__main');
document.addEventListener('DOMContentLoaded', function () {
  for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ], {
    gap: '30px',
    speed: '1000',
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
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide( '#splide1', {
  speed: 800,
  autoplay: "play",
  perPage: 1,
  gap: '30px',
  pagination: true,
  type: 'loop',
  start: 1,
  breakpoints: {
    767: {
      arrows: false,
    }
  }
} ).mount();
  splide.on( 'pagination:mounted', function ( data ) {
    // You can add your class to the UL element
    data.list.classList.add( 'splide__pagination--custom' );

    // `items` contains all dot items
    data.items.forEach( function ( item ) {
      item.button.textContent = String( item.page + 1 );
    } );
  } );
});
/* гамбургер */
const hamburger = document.querySelector('.promo__menu-hamburger');
const menu = document.querySelector('.promo__menu-list');

if (hamburger !== null) {
  hamburger.addEventListener('click', function(e) {
    menu.classList.toggle('active')
  })
};
/* модальное окно */
const modalBackground = document.querySelector('.modal');
const openModalBtns = document.querySelectorAll('.form-order__button');
const closeModalBtn = document.querySelector('.form-order__close')

for (let openModalBtn of openModalBtns ) {
  openModalBtn.addEventListener('click', () => {
  modalBackground.classList.toggle('modal__active')
  if (menu !== null) {
    menu.classList.remove('active')
  }
});
}
modalBackground.addEventListener('click', (event) => {
  if (event.target === modalBackground) {
    modalBackground.classList.remove('modal__active')
  }
});
closeModalBtn.addEventListener('click', () => {
  modalBackground.classList.remove('modal__active')
});
/* фильтр */
const buttons = document.querySelectorAll('.nav-btn')
const cards = document.querySelectorAll('.splide__projects')
function filter (category, items) {
  items.forEach((item) => {
    const isItemFiltered = !item.classList.contains(category)
    const isShowAll = category.toLowerCase() === 'all'
    if (isItemFiltered && !isShowAll) {
        item.classList.add('hide')
    } else {
        item.classList.remove('hide')
    }
  })
}
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      console.log(currentCategory);
      filter(currentCategory, cards);
    });
  });
/* маска телефона */
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});