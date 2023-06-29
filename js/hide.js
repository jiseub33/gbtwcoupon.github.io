// Make an AJAX request to fetch the server time
fetch('/api/server-time')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var serverTime = new Date(data.serverTime);
    updateElements(serverTime);
  })
  .catch(function(error) {
    console.error('Error fetching server time:', error);
  });

// Function to update elements based on the server time
function updateElements(serverTime) {
  var elements = document.querySelectorAll(".available");

  elements.forEach(function(element) {
    var hideDate = new Date(element.dataset.hideDate);
    if (serverTime >= hideDate) {
      element.classList.remove("available");
      element.classList.add("unavailable");
    }
  });
}