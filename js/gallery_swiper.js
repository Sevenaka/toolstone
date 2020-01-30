var gallerySlider = document.querySelectorAll('.gallery_slider');

if(gallerySlider.length) {
  gallerySlider.forEach(function(elem, index){
    var slides = 4;
    var thumbMargin = 27;

    if(elem.getAttribute("data-thumb-slides")) {
      slides = Number(elem.getAttribute("data-thumb-slides"));
    }

    if(elem.getAttribute("data-thumb-margin")) {
      thumbMargin = Number(elem.getAttribute("data-thumb-margin"));
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
          nextEl: '.gallery_arr-next-'+index,
          prevEl: '.gallery_arr-prev-'+index,
        },
        thumbs: {
          swiper: galleryThumbs
        }
    });
  });
}