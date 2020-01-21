var app = new Vue({
    el: '#category',
    data: {
        filter: 1
    },
    methods: {
        changeFilter(filter) {
            this.filter = filter;
        }
    },
    mounted() {
        var body = document.body;
        var headerCatalogBrn = document.querySelector('.header_catalog');
        var categoryMenu = document.querySelector('.category_menu');

        if(categoryMenu) {
            var categoryList = document.querySelector('.category_brand_list');
            var categoryBigList = document.querySelector('.category_bgilist_scroll');
            var closeCat = document.querySelector('.close_cat');

            closeCat.addEventListener('click', function() {
                categoryMenu.classList.remove('open');
                headerCatalogBrn.classList.remove('active');
                body.classList.remove('scroll_hide');
            });

            headerCatalogBrn.addEventListener('click', function() {
                if(categoryMenu.classList.contains('open')){
                    categoryMenu.classList.remove('open');
                    headerCatalogBrn.classList.remove('active');
                    body.classList.remove('scroll_hide');
                } else {
                    categoryMenu.classList.add('open');
                    body.classList.add('scroll_hide');
                    headerCatalogBrn.classList.add('active');

                    var catHeight = categoryMenu.clientHeight - 53;

                    categoryList.setAttribute('style', 'max-height:'+catHeight+'px');
                    categoryBigList.setAttribute('style', 'max-height:'+catHeight+'px');
                }
            });
        }
    }
})