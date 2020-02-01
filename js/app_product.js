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
                    toggleContainer.scrollIntoView({behavior: "smooth"});
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

//Rew add btn
var rewBtn = document.querySelector('.rew_add_btn');

if(rewBtn) {
    var rewForm = document.querySelector('.rew_form.hidden');

    rewBtn.addEventListener('click', function(){
        this.remove();
        rewForm.classList.remove('hidden');
        rewForm.querySelector('.name_f').focus();
    });
}