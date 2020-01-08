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

//NEWS BIG SLIDER
var swiper = new Swiper('.big_news_swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
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

/*
document.addEventListener('click', function(e){
    if(!popupDummy.classList.contains('hide')) {
        var target = e.target,
            its_menu = target == menuContainer || menuContainer.contains(target);
        if(!its_menu) {
            classToggle(popupBtn, 'hide');
            popupDummy.classList.add('hide');
        }
    }
});
*/