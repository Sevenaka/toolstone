var body = document.body;

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

var formInput = document.querySelectorAll('.input_wrapper.input_label .form-control');

if(formInput.length) {
    formInput.forEach(function(input){

        if(input.value) {
            input.parentNode.classList.add('focus');
        }

        input.addEventListener('focus', function(){
            if(!this.parentNode.classList.contains('focus')){
                this.parentNode.classList.add('focus');
            }
        });
        input.addEventListener('blur', function(){
            if(!this.value.length) this.parentNode.classList.remove('focus');
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
    loop: true,
    navigation: {
      nextEl: '.carousel_next',
      prevEl: '.carousel_prev',
    },
    pagination: {
        el: '.carousel_pagination',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        740: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        968: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1224: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
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

new Swiper('.front_big_slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.front-next',
      prevEl: '.front-prev',
    },
    pagination: {
        el: '.front-pagination',
    }
});

new Swiper('.front_new_product', {
    navigation: {
      nextEl: '.new-next',
      prevEl: '.new-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        740: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        968: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1224: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
    }
});

new Swiper('.front_akcii_product', {
    navigation: {
      nextEl: '.akcii-next',
      prevEl: '.akcii-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        740: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        968: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1224: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
    }
});

new Swiper('.rew_carousel_2', {
    navigation: {
      nextEl: '.rew2-next',
      prevEl: '.rew2-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        740: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        968: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1224: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
    }
});

new Swiper('.news_carousel', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        740: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        968: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1224: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

new Swiper('.news_carousel3', {
    navigation: {
      nextEl: '.news_carousel3-next',
      prevEl: '.news_carousel3-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        740: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        968: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1224: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

//banner_fluid_slide
new Swiper('.banner_fluid_slide', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.banner_slide-pagination',
    }
});

//banner_fluid_slide product
new Swiper('.card_slide .banner_fluid_slide', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.card_banner_slide-pagination',
    }
});

new Swiper('.news_carousel_4', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        740: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        968: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1224: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

new Swiper('.tab_video_carousel', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.next-body',
      prevEl: '.prev-body',
    }
});

//RIGHT POPUP MENU
var popupBtn = document.querySelector('.fix_popup_menu');

if(popupBtn) {
    var popupDummy = document.querySelector('.popup_dummy'),
        closeBtn = popupDummy.querySelector('.close_menu'),
        menuContainer = popupDummy.querySelector('.popup_menu_container'),
        popupNavWrap = popupDummy.querySelector('.popup_menu_container .popup_content'),
        popupHeader = popupDummy.querySelector('.popup_menu_container .popup_header');

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

    window.onscroll = function() {popupSticky()};

    var sticky = popupBtn.offsetTop;

    if (window.pageYOffset > sticky) {
        popupBtn.classList.add("sticky");
    }

    function popupSticky() {
        if (window.pageYOffset > sticky) {
            popupBtn.classList.add("sticky");
        } else {
            popupBtn.classList.remove("sticky");
        }
    }

    function popupResize() {
        var headerHeight = document.querySelector('.header').offsetHeight;
        var popupMaxHeight = (window.innerHeight - headerHeight) - 50 - 46;
        popupNavWrap.style.maxHeight = popupMaxHeight+'px';
    }

    popupResize();

    let resizeId;
    window.addEventListener('resize', () => {
        clearTimeout(resizeId);
        resizeId = setTimeout(() => {
            popupResize();
        }, 500);
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

//Header scroll change
/*
var headerFixed = document.querySelector('.header.fixed');
if(headerFixed) {
    window.onscroll = function() {headerChange()};

    var scrollBr = 100;

    if(window.pageYOffset >= scrollBr) {
        headerFixed.classList.add('change_header');
    }

    function headerChange() {
        if(window.pageYOffset >= scrollBr) {
            headerFixed.classList.add('change_header');
        } else {
            headerFixed.classList.remove('change_header');
        }
    }
}*/


var searchInput = document.querySelector('.header_search .search_input');

if(searchInput) {
    searchInput.addEventListener("focusin", function(){
        this.classList.add('elem_focus');
    });

    searchInput.addEventListener("focusout", function(){
        this.classList.remove('elem_focus');
    });
}


//Expand menu position
var liExpand = document.querySelectorAll('.li_expand');

if(liExpand.length) {
    var documentWidth = document.body.clientWidth / 2;
    liExpand.forEach(function(item) {
        if(Math.round(item.getBoundingClientRect().right) > documentWidth) {
            item.classList.add('li_right');
        } else {
            item.classList.add('li_left');
        }
    });
}


//Login modal event
$('#userModal').on('show.bs.modal', function () {
    var focusInpt = document.querySelector('.login_modal .name_f');
    if(focusInpt) {
        setTimeout(function(){
            if(!focusInpt.value.length) focusInpt.focus();
        }, 500);
    }
});


//Toggle collapse text
var moreBody = document.querySelectorAll('.more_block[data-toggle]');

if(moreBody.length) {
    moreBody.forEach(function(item){

        var id = item.getAttribute('data-toggle');

        if(item.clientHeight > 620) {
            item.classList.add('toggle_on');
        }
    });
}

var moreToggle = document.querySelectorAll('[data-more-toggle]');

if(moreToggle.length){
    moreToggle.forEach(function(item){

        item.innerHTML = item.getAttribute('data-hide-title');

        item.addEventListener('click', function(){

            var curToggle = item.getAttribute('data-more-toggle');
            var toggleContainer = document.querySelector('[data-toggle="'+curToggle+'"]');
            if(toggleContainer) {
                if(toggleContainer.classList.contains('show')){
                    toggleContainer.classList.remove('show');
                    toggleContainer.scrollIntoView({
                        behavior: "smooth",
                        block: 'center',
                        inline: 'center'
                    });
                    item.innerHTML = item.getAttribute('data-hide-title');
                    item.classList.remove('btn_active');
                } else {
                    toggleContainer.classList.add('show');
                    item.classList.add('btn_active');
                    item.innerHTML = item.getAttribute('data-show-title');
                }
            } else {
                console.log('Block not found')
            }
        });
    });
}