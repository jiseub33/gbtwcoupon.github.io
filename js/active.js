// Get the text from the clipboard
function getTextFromClipboard() {
    navigator.clipboard.readText().then(function(clipboardText) {
      // Call a function to add class based on clipboard text
      addClassToButtons(clipboardText);
    });
  }

  // Add class to buttons based on clipboard text
  function addClassToButtons(clipboardText) {
    var buttons = document.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
      var buttonText = buttons[i].textContent;

      if (buttonText === clipboardText) {
        buttons[i].classList.add('active');
      }
    }
  }

  // Call the function to get clipboard text and add class to buttons
  getTextFromClipboard();