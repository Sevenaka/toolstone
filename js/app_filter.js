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