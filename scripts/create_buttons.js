define(function (require) {

    function createButtons(element, totalNumber) {
        element = element || document.body;
        totalNumber = totalNumber || 100;

        // create buttons
        var buttonsHtml = '';
        for (var i = 0; i < totalNumber; i++) {
            buttonsHtml += '<button></button>';
        }
        element.innerHTML = buttonsHtml;

        // iterate over all buttons and..
        var buttons = element.children;
        for (i = 0, max = buttons.length; i < max; i++) {
            var num = i + 1;

            // add a button number to button’s label
            buttons[i].innerHTML = num;
            buttons[i].number = num;
        }

        return element;
    }

    return createButtons;
});
