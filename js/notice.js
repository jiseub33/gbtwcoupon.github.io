document.addEventListener("DOMContentLoaded", function() {
    const notice = document.querySelector(".notice-new");

    if (!notice) return; // Prevents errors if element is missing

    // Check if 'notice-new' class should be removed based on localStorage
    if (localStorage.getItem("noticeClicked") === "true") {
        notice.classList.remove("notice-new");
    }

    notice.addEventListener("click", function(event) {
        if (this.classList.contains("notice-new")) {
            event.preventDefault(); // Prevent only if "notice-new" exists

            // Remove 'notice-new' class
            this.classList.remove("notice-new");

            // Save state in localStorage
            localStorage.setItem("noticeClicked", "true");

            // Allow navigation after a short delay (to ensure class is removed)
            setTimeout(() => {
                window.location.href = this.href;
            }, 50);
        }
    });
});