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

//Collapse filter functions
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

var rangeConst;
var rangeInput = document.querySelectorAll('.range_input');
var inputMin = document.querySelector('.range_input .range_min');
var inputMax = document.querySelector('.range_input .range_max');

var rangeMin = 50000;
var rangeMax = 2900000;

if(rangeInput.length){
    rangeInput.forEach(function(item){
        item.addEventListener('click', function(){
            this.querySelector('input').focus();
        });
    });
}

var range = document.querySelector('.js-range-slider');

if(range) {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: rangeMin,
        max: rangeMax,
        from: Math.round(Number(inputMin.value.replace(/\s+/g,''))),
        to: Math.round(Number(inputMax.value.replace(/\s+/g,''))),
        grid: true,
        onChange: function (data) {
            inputMin.value = data.from_pretty;
            inputMax.value = data.to_pretty;
        }
    });
    rangeConst = $(".js-range-slider").data("ionRangeSlider");
}

inputMin.addEventListener('input', function() {
    var val = Math.round(Number(this.value.replace(/\s+/g,'')));
    if(!val || val < rangeMin) {
        val = rangeMin;
        this.value = rangeMin;
    }
    rangeConst.update({
        from: val
    });
});

inputMax.addEventListener('input', function() {
    var val = Math.round(Number(this.value.replace(/\s+/g,'')));
    if(!val || val > rangeMax) {
        val = rangeMax;
        this.value = rangeMax;
    }
    rangeConst.update({
        to: val
    });
});

tippy('.tippy_table', {
    placement: 'left',
    arrow: false,
    content(reference) {
        const id = reference.getAttribute('data-template');
        const template = document.getElementById(id);
        return template.innerHTML;
    }
});