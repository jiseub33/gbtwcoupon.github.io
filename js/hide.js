var elements = document.querySelectorAll(".available");

getServerTime().then(serverTime => {
    elements.forEach(function(element) {
        var hideDate = new Date(element.dataset.hideDate);

        var timeDifference = hideDate - serverTime;

        if (timeDifference <= 24 * 60 * 60 * 1000 && timeDifference > 0) {
            element.classList.add("today");
            element.id = "today";
        }

        if (serverTime >= hideDate) {
            element.classList.remove("available");
            element.classList.remove("today");
            element.id = "";
            element.classList.add("unavailable");
        }
    });
});
