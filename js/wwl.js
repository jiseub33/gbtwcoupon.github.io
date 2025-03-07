async function loadCSV() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTvEf2Dfcaq5VOiUXcgZCuNDZS38j_hxIGH9iEPmqIVNYdsDWh9z0VeWvqsJyI_ImXq4Qax3VoZmsxu/pub?gid=0&single=true&output=csv'); // CSV 파일 불러오기
    const text = await response.text();
    const rows = text.trim().split("\n").map(row => row.split(",")); // CSV 파싱

    const headers = rows.shift(); // 헤더 추출
    const data = rows.map(row => Object.fromEntries(row.map((cell, i) => [headers[i], cell])));

    data.forEach(row => {
        const roundId = `round${row.round}`; // round에 따라 id 설정
        const roundElement = document.getElementById(roundId);
        if (!roundElement) return; // 해당 round가 없으면 무시

        const stepClass = row.step !== "normal" ? row.step : ""; // step이 normal이 아니면 class 추가
        const warDiv = document.createElement("div");
        warDiv.className = `war ${stepClass}`;

        warDiv.innerHTML = `
            <div class="title">
                <div class="team">
                    <p>${row.team1}</p>
                    <img src="images/wwl/alliance_logo/${row.team1}.png" alt="">
                </div>
                <div></div>
                <div class="team">
                    <img src="images/wwl/alliance_logo/${row.team2}.png" alt="">
                    <p>${row.team2}</p>
                </div>
            </div>
            <div class="time">전투시간 | <span>${row.playtime}</span></div>
            <div class="info">
                <div>
                    <div>${row.server_team1}</div>
                    <div>서버</div>
                    <div>${row.server_team2}</div>
                </div>
                <div>
                    <div>${row.group_team1}</div>
                    <div>그룹</div>
                    <div>${row.group_team2}</div>
                </div>
                <div>
                    <div>${row.score_team1}</div>
                    <div>점수</div>
                    <div>${row.score_team2}</div>
                </div>
                <div>
                    <div>${row.people_team1}</div>
                    <div>인원</div>
                    <div>${row.people_team2}</div>
                </div>
                <div>
                    <div>${row.ranking_team1}</div>
                    <div>순위</div>
                    <div>${row.ranking_team2}</div>
                </div>
            </div>
        `;

        roundElement.appendChild(warDiv); // 해당 round에 추가
        document.querySelectorAll(".road").forEach(element => {
            element.classList.remove("road");
        });
    });
}

window.onload = loadCSV; // 페이지 로드 시 CSV 불러오기
