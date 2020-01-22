var btnPlus = document.querySelectorAll('.card_count .btn-plus');
var btnMinus = document.querySelectorAll('.card_count .btn-minus');
var countInput = document.querySelectorAll('.count_input');

if(btnPlus.length) {
    btnPlus.forEach(function(item) {
        item.addEventListener('click', function() {
            var input = this.parentNode.querySelector('.count_input');
            var inputDym = this.parentNode.querySelector('.input_dym strong');
            if(input.value < 1000) {
                input.value = Number(input.value) + 1;
                inputDym.innerHTML = input.value
            }
        });
    });
}

if(btnMinus.length) {
    btnMinus.forEach(function(item) {
        item.addEventListener('click', function() {
            var input = this.parentNode.querySelector('.count_input');
            var inputDym = this.parentNode.querySelector('.input_dym strong');
            if(input.value > 0) {
                input.value = Number(input.value) - 1;
                inputDym.innerHTML = input.value
            }
        });
    });
}

function inputValidateNum(input) { 
    input.value = input.value.replace(/[^\d,]/g, '');
};

//Collapse filter
var collapse = document.querySelectorAll('.filter_collapse .collapse_label');

if(collapse.length){
    collapse.forEach(function(item){
        item.addEventListener('click', function() {
            var collapseParent = this.parentNode;
            if(collapseParent.classList.contains('show')){
                collapseParent.classList.remove('show');
            } else {
                collapseParent.classList.add('show');
            }
        });
    });
}