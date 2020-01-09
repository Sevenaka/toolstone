function classToggle(element, className) {
    element.classList.toggle(className);
}

//FORM REQUIRED MARK CLICK
var requiredMark = document.querySelectorAll('.input_wrapper .required');

if(requiredMark && requiredMark.length) {
    requiredMark.forEach(function(item) {
        item.addEventListener('click', function(){
            for (var i = 0; i < this.parentNode.childNodes.length; i++) {
                if (this.parentNode.childNodes[i].className == "form-control") {
                    this.parentNode.childNodes[i].focus();
                  break;
                }        
            }
        });
    });
}

//SWIPER 
new Swiper('.big_news_swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    }
});

new Swiper('.fluid_slider', {
    navigation: {
      nextEl: '.next_slide',
      prevEl: '.prev_slide',
    },
    pagination: {
        el: '.pagination_slide',
    }
});

new Swiper('.swiper_carousel', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.carousel_next',
      prevEl: '.carousel_prev',
    },
    pagination: {
        el: '.carousel_pagination',
    }
});

//swiper_carousel_centered
new Swiper('.swiper_carousel_centered', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    }
});

new Swiper('.news_carousel', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

//RIGHT POPUP MENU
var popupBtn = document.querySelector('.fix_popup_menu'),
    popupDummy = document.querySelector('.popup_dummy'),
    closeBtn = popupDummy.querySelector('.close_menu'),
    menuContainer = popupDummy.querySelector('.popup_menu_container');

popupBtn.addEventListener('click', function(){
    classToggle(this, 'hide');
    classToggle(popupDummy, 'hide');
});

closeBtn.addEventListener('click', function(){
    classToggle(popupBtn, 'hide');
    classToggle(popupDummy, 'hide');
});

popupDummy.addEventListener('click', function(target){
    if(target.composedPath()[0] === this) {
        classToggle(popupBtn, 'hide');
        classToggle(this, 'hide');
    }
});