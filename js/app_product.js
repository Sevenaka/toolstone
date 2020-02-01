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
    var tabsContainer = document.querySelectorAll('.tabs_container .tab_detail');

    tabsHeader.forEach(function(item){
        item.addEventListener('click', function(){
            var selectId = this.getAttribute('data-tab');
            document.querySelector('.header_tabs .tabs_list .item span.active').classList.remove('active');
            item.querySelector('span').classList.add('active');
            tabsContainer.forEach(function(tab){
                tab.classList.remove('active');
            });
            var activeTab = document.querySelector('.tabs_container .tab_detail.tab_'+selectId);
            if(activeTab) activeTab.classList.add('active');
        });
    });
}