var gallerySlider = document.querySelectorAll('.gallery_slider');

if(gallerySlider.length) {
  gallerySlider.forEach(function(elem, index){
    var slides = 4;
    var thumbMargin = 27;
    var unicIdSlider = null;

    if(elem.getAttribute("data-thumb-slides")) {
      slides = Number(elem.getAttribute("data-thumb-slides"));
    }

    if(elem.getAttribute("data-thumb-margin")) {
      thumbMargin = Number(elem.getAttribute("data-thumb-margin"));
    }
    
    if(elem.getAttribute("data-swiper-id")) {
      unicIdSlider = elem.getAttribute("data-swiper-id");
    }

    var top = elem.querySelector('.gallery-top');
    var thumb = elem.querySelector('.gallery-thumbs');
    var galleryThumbs = new Swiper(thumb, {
        spaceBetween: thumbMargin,
        slidesPerView: slides,
        lazy: true,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
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