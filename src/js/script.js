const elms = document.getElementsByClassName( 'splide');


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
