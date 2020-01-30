var tippyList = document.querySelectorAll('.tippy_table');

if(tippyList.length) {
    tippy('.tippy_table', {
        placement: 'left',
        arrow: false,
        content(reference) {
            const id = reference.getAttribute('data-template');
            const template = document.getElementById(id);
            return template.innerHTML;
        }
    });
}

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 27,
    slidesPerView: 4,
    lazy: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 0,
    lazy: true,
    navigation: {
      nextEl: '.gallery_arr-next-0',
      prevEl: '.gallery_arr-next-0',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });