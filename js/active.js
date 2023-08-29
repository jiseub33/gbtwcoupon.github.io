var couponButtons = document.querySelectorAll('.coupons button');

couponButtons.forEach(function(button) {
  button.addEventListener('click', compareTextAndUpdateClass);
});

function compareTextAndUpdateClass() {
  navigator.clipboard.readText().then(function(clipboardText) {
    var buttons = document.querySelectorAll('.coupons button');

    buttons.forEach(function(button) {
      var buttonText = button.textContent;

      if (buttonText === clipboardText) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }).catch(function(error) {
    console.log('Error reading clipboard text:', error);
  });
}