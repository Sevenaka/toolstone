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

new Swiper('.media_slider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.media_next',
      prevEl: '.media_prev',
    },
    pagination: {
        el: '.media_pagination',
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

new Swiper('.rew_carousel', {
    slidesPerView: 3,
    spaceBetween: 31,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

new Swiper('.news_carousel', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

new Swiper('.news_carousel_4', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

//RIGHT POPUP MENU
var popupBtn = document.querySelector('.fix_popup_menu');

if(popupBtn) {
    var popupDummy = document.querySelector('.popup_dummy'),
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
}

/* BACK TO TOP */
var backToTop = document.querySelector('.back_to_top');

if(backToTop) {
    if(window.scrollY <= 300) {
        backToTop.style.visibility = 'hidden';
    }

    backToTop.addEventListener('click', function(){
        window.scrollTo(0, 0);
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY >= 300) {
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.visibility = 'hidden';
        }
    });
}

/* SUBHEADER STICKY */
var subheaderSticky = document.querySelector('.header_sticky');

if(subheaderSticky) {
    window.onscroll = function() {headerSticky()};

    var sticky = subheaderSticky.offsetTop;

    if (window.pageYOffset > sticky) {
        subheaderSticky.classList.add("sticky");
    }

    function headerSticky() {
        if (window.pageYOffset > sticky) {
            subheaderSticky.classList.add("sticky");
        } else {
            subheaderSticky.classList.remove("sticky");
        }
    }
}

//DYNAMIC HEADER
var dynamicHeader = document.querySelector('.header_top.dynamic');

if(dynamicHeader) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if(currentScrollPos >= 100) {
            if (prevScrollpos > currentScrollPos) {
                dynamicHeader.classList.remove('header_unpinned');
                dynamicHeader.classList.add('header_pinned');
            }
            else {
                dynamicHeader.classList.remove('header_pinned');
                dynamicHeader.classList.add('header_unpinned');
            }
        } else {
            dynamicHeader.classList.remove('header_unpinned');
            dynamicHeader.classList.add('header_pinned');
        }
        prevScrollpos = currentScrollPos;
    }
}


//IMAGE LAZY LOAD INIT
var lazyElements = document.querySelectorAll('.lazy');

if(lazyElements.length) {
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
}