// Function to compare clipboard text with button text and add/remove class
function compareTextAndUpdateClass() {
  navigator.clipboard.readText().then(function(clipboardText) {
    var buttons = document.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
      var buttonText = buttons[i].textContent;

      if (buttonText === clipboardText) {
        buttons[i].classList.add('active');
      } else {
        buttons[i].classList.remove('active');
      }
    }
  }).catch(function(error) {
    console.log('Error reading clipboard text:', error);
  });
}

// Call the function initially
compareTextAndUpdateClass();

// Monitor clipboard changes periodically
setInterval(compareTextAndUpdateClass, 100); // Change interval as desired
