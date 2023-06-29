// Get all the elements with the "element" class
var elements = document.querySelectorAll(".available");

// Loop over the elements and check the hide date
elements.forEach(function(element) {
  var hideDate = new Date(element.dataset.hideDate);
  if (date >= hideDate) {
    element.classList.remove("available");
    element.classList.add("unavailable");
  }
});
