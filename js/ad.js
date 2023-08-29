document.addEventListener("DOMContentLoaded", function() {
    var adElement = document.querySelector(".ad");
    var deadlineElement = document.querySelector(".deadline");

    function checkForTodayClass() {
        var todayButton = document.querySelector(".coupons .today");
        
        if (todayButton) {
            adElement.style.display = "none";
            deadlineElement.style.display = "block";
        } else {
            adElement.style.display = "block";
            deadlineElement.style.display = "none";
        }
    }

    // Check for the class initially and then every 1000ms (1 second)
    checkForTodayClass();
    setInterval(checkForTodayClass, 1000);
});
