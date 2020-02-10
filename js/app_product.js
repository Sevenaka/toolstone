var tippyList = document.querySelectorAll('.tippy_table');
var tippyFac = document.querySelectorAll('.tippy_faq');

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

if(tippyFac.length) {
    tippy('.tippy_faq', {
        maxWidth: 251,
        placement: 'right',
        theme: 'toolstone'
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

var selDropdown = document.querySelectorAll('.select_dropdown');

if(selDropdown.length) {
    selDropdown.forEach(function(item){
        var dropLink = item.querySelectorAll('.drop_select');
        var dropBtn = item.querySelector('.btn .btn_label');
        dropLink.forEach(function(link){
            link.addEventListener('click', function(){
                var selectVal = this.getAttribute('data-val');
                item.querySelector('.drop_select.active').classList.remove('active');
                this.classList.add('active');
                dropBtn.innerHTML = selectVal;

                //Возможно ajax событие клика по выпадающему списку
            })
        });
    });
}

//Product tabs
var tabsHeader = document.querySelectorAll('.header_tabs .tabs_list .item');

if(tabsHeader.length) {
    var parentTabList = document.querySelector('.header_tabs .tabs_list');
    var tabsContainer = document.querySelectorAll('.tabs_container .tab_detail');

    tabsHeader.forEach(function(item){
        item.addEventListener('click', function(){

            parentTabList.scrollTo({
                left: this.offsetLeft - item.clientWidth,
                behavior: "smooth"
            });

            var selectId = this.getAttribute('data-tab');
            document.querySelector('.header_tabs .tabs_list .item span.active').classList.remove('active');
            item.querySelector('span').classList.add('active');
            tabsContainer.forEach(function(tab){
                tab.classList.remove('active');
            });
            var activeTab = document.querySelector('.tabs_container .tab_detail.tab_'+selectId);
            if(activeTab) activeTab.classList.add('active');

            //activeTab
            if(activeTab.classList.contains('rew_empty')){
                activeTab.querySelector('.name_f').focus();
            }

            var moreBlock = activeTab.querySelector('.more_block[data-toggle]');

            if(moreBlock) {
                var id = moreBlock.getAttribute('data-toggle');

                if(!moreBlock.classList.contains('toggle_on')){
                    if(moreBlock.clientHeight > 620) moreBlock.classList.add('toggle_on');
                    else {
                        document.querySelector('button[data-more-toggle="'+id+'"]').parentNode.parentNode.remove();
                    }
                }
            }
        });
    });
}

//Rew add btn
var rewBtn = document.querySelector('.rew_add_btn');

if(rewBtn) {
    var rewForm = document.querySelector('.rew_form.hidden');

    rewBtn.addEventListener('click', function(){
        this.remove();
        rewForm.classList.remove('hidden');
        rewForm.querySelector('.name_f').focus();
        rewForm.scrollIntoView({
            behavior: "smooth",
            block: 'center',
            inline: 'center'
        });
    });
}

//Product ico slider
var swiper2 = new Swiper('.product_ico_slider', {
    direction: 'vertical',
    spaceBetween: 16,
    slidesPerView: 7,
    navigation: {
        nextEl: '.product_ico_next',
        prevEl: '.product_ico_prev',
    },
});

var productIcoWrap = document.querySelector('.product_icons');

if(productIcoWrap) {
    var productIco = document.querySelectorAll('.product_icons .item_list .item');
    if(productIco.length > 7) {
        productIcoWrap.classList.add('many_item');
    }
}