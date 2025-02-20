document.addEventListener("DOMContentLoaded", function() {
    const notice = document.getElementById("notice");

    // Check if 'NOTICE-NEW' class should be removed based on localStorage
    if (localStorage.getItem("noticeClicked") === "true") {
        notice.classList.remove("notice-new");
    }

    notice.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents the default link behavior

        // Remove 'NOTICE-NEW' class
        this.classList.remove("notice-new");

        // Save state in localStorage
        localStorage.setItem("noticeClicked", "true");
    });
});