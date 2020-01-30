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