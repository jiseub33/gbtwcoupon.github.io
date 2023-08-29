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

    checkForTodayClass();
    setInterval(checkForTodayClass, 0);
});
