// Budget Controller
var budgetController = (function() {
    // Some code here
    
})();


// UI Controller
var UIController = (function() {
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        
        getDOMStrings: function(){
            return DOMStrings;
        }
    };
})();


// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var setUpEventListeners = function() {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            } 
        });
    };
    
    var DOM = UICtrl.getDOMStrings();
    
    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);
    }
    
    return {
        init: function(){
            console.log('Application started.');
            setUpEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();
