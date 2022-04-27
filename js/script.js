$(document).ready(function(){
    //mixitup jquery plugin start
    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

    var mixer = mixitup(containerEl, {
        selectors: {
            target: '[data-ref~="mixitup-target"]'
        }
    });
 
    //mixitup jquery plugin end

});