var gallerySlider = document.querySelectorAll('.gallery_slider');

if(gallerySlider.length) {
  gallerySlider.forEach(function(elem, index){
    var slides = 4;
    var thumbMargin = 27;
    var unicIdSlider = null;
    var direction = 'horizontal';

    if(elem.getAttribute("data-thumb-slides")) {
      slides = Number(elem.getAttribute("data-thumb-slides"));
    }

    if(elem.getAttribute("data-thumb-margin")) {
      thumbMargin = Number(elem.getAttribute("data-thumb-margin"));
    }
    
    if(elem.getAttribute("data-swiper-id")) {
      unicIdSlider = elem.getAttribute("data-swiper-id");
    } 
    if(elem.getAttribute("data-thumb-direction")) {
      direction = elem.getAttribute("data-thumb-direction");
    }
    var top = elem.querySelector('.gallery-top');
    var thumb = elem.querySelector('.gallery-thumbs');
    var galleryThumbs = new Swiper(thumb, {
        lazy: true,
        direction: 'horizontal',
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          640: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1000: {
            direction: direction,
            spaceBetween: thumbMargin,
            slidesPerView: slides
          },
          1224: {
              direction: direction,
              spaceBetween: thumbMargin,
              slidesPerView: slides
          }
        }
    });
    var galleryTop = new Swiper(top, {
        spaceBetween: 0,
        lazy: true,
        navigation: {
          nextEl: '.gallery_arr-next-'+unicIdSlider,
          prevEl: '.gallery_arr-prev-'+unicIdSlider,
        },
        thumbs: {
          swiper: galleryThumbs
        }
    });
  });
}