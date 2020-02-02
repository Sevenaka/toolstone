var delBtn = document.querySelector('.del_focus');
//focus_type
if(delBtn) {
    var delWrapper = document.querySelector('.delivery_wrapper');
    delBtn.addEventListener('change', function() {
        if(!delWrapper.querySelector('.focus_type').value.length) {
            delWrapper.querySelector('.focus_type').focus();
        }
    });
}