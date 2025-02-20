document.addEventListener("DOMContentLoaded", function () {
    const notice = document.querySelector(".notice-new");
    if (!notice) return;

    const CURRENT_VERSION = "2025-02-22"; // 현재 공지 버전
    const STORED_VERSION = localStorage.getItem("noticeVer"); // 저장된 공지 버전
    const CLICKED = localStorage.getItem("noticeClicked") === "true"; // 클릭 여부 확인

    // 공지 버전이 다르면 저장된 상태 초기화
    if (STORED_VERSION !== CURRENT_VERSION) {
        localStorage.setItem("noticeVer", CURRENT_VERSION); // 새로운 버전 저장
        localStorage.removeItem("noticeClicked"); // 클릭 상태 초기화
    }

    // 이전에 클릭한 적이 있으면 `.notice-new` 제거
    if (CLICKED) {
        notice.classList.remove("notice-new");
    }

    // 클릭 이벤트 리스너 추가
    notice.addEventListener("click", function (event) {
        if (this.classList.contains("notice-new")) {
            event.preventDefault(); // 기본 링크 이동 방지

            this.classList.remove("notice-new");
            localStorage.setItem("noticeClicked", "true"); // 클릭 상태 저장
            localStorage.setItem("noticeVer", CURRENT_VERSION); // 현재 버전도 저장 (확실히 동기화)

            // 짧은 딜레이 후 링크 이동
            setTimeout(() => {
                window.location.href = this.href;
            }, 50);
        }
    });
});
