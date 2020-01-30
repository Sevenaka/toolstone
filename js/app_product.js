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

var productFluidCard = document.querySelectorAll('.product_card_f');

if(productFluidCard.length) {
    productFluidCard.forEach(function(elem, index){
        var top = elem.querySelector('.gallery-top');
        var thumb = elem.querySelector('.gallery-thumbs');
        var galleryThumbs = new Swiper(thumb, {
            spaceBetween: 27,
            slidesPerView: 4,
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
  
$('[data-fancybox').fancybox({
    backFocus : false,
    thumbs : {
        autoStart : true,
        axis      : 'x'
    },
    btnTpl: {
        close:
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
      '<i class="icon-close"></i>' +
      "</button>",
        arrowLeft:
      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
      '<i class="icon-ar_back"></i>' +
      "</button>",
      arrowRight:
      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
      '<i class="icon-ar_next"></i>' +
      "</button>"
    }
 });