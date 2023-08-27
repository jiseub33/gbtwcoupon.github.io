document.addEventListener("DOMContentLoaded", function() {
    var isDescending = false;
    var buttonContainer = document.querySelector('.coupons');

    document.getElementById('toggleButton').addEventListener('click', function() {
        toggleButtonOrder();
    });

    function toggleButtonOrder() {
        var buttons = Array.from(buttonContainer.children);
        var reversedButtons = buttons.reverse();

        buttonContainer.innerHTML = '';
        reversedButtons.forEach(function(button) {
            buttonContainer.appendChild(button);
        });

        isDescending = !isDescending;

        var toggleButton = document.getElementById('toggleButton');
        if (isDescending) {
            toggleButton.classList.add('oldest');
        } else {
            toggleButton.classList.remove('oldest');
        }
    }
});
