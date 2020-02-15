var menu = document.querySelector('.mobile_menu');
var menuDym = document.querySelector('.mobile_menu_dym');
var menuBtn = document.querySelector('.mobile_menu_btn');
var closeMobile = document.querySelector('.close_mobile');

if(menuBtn) {
    menuBtn.addEventListener('click', function() {
        menu.classList.add('open');
        menuDym.classList.add('open');
        document.body.classList.add('scroll_hide');
    });

    function menuClose() {
        menu.classList.remove('open');
        menuDym.classList.remove('open');
        document.body.classList.remove('scroll_hide');
    }

    if(menuDym) {
        menuDym.addEventListener('click', function() {
            menuClose();
        });
    }

    if(closeMobile) {
        closeMobile.addEventListener('click', function() {
            menuClose();
        });
    }
}