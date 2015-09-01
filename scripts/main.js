define(["./create_buttons"], function (createButtons) {

    var buttonsEl = document.getElementById('buttons');
    createButtons(buttonsEl, 100);

    // add a click handler which displays a button number via alert
    buttonsEl.onclick = function(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;

        if (target.nodeName == 'BUTTON' && target.number) {
            alert(target.number);
        }
    };

});
