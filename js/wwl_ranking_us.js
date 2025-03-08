// CSV 파일을 비동기적으로 불러오는 함수
async function loadCSV() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTvEf2Dfcaq5VOiUXcgZCuNDZS38j_hxIGH9iEPmqIVNYdsDWh9z0VeWvqsJyI_ImXq4Qax3VoZmsxu/pub?gid=1335842753&single=true&output=csv');
    const text = await response.text();
    const rows = text.trim().split("\n").map(row => row.split(",")); // CSV 파싱
    
    const headers = rows.shift(); // 첫 번째 행은 헤더
    const data = rows.map(row => Object.fromEntries(row.map((cell, i) => [headers[i], cell]))); // CSV 데이터 객체로 변환

    // 데이터를 그룹별로 추가
    data.forEach(groupData => appendToGroup(groupData));

    // all_ranking 기준으로 정렬 후 allranking ID 컨테이너에 추가
    const sortedData = data.sort((a, b) => a.all_ranking - b.all_ranking);
    sortedData.forEach(groupData => appendToAllRanking(groupData));
}

// 데이터를 그룹별로 추가하는 함수
function appendToGroup(groupData) {
    // 그룹이 BLUE인지 RED인지 확인
    const containerId = groupData.group === "BLUE" ? "teamranking_blue" : "teamranking_red";
    const container = document.getElementById(containerId);

    // innerHTML 방식으로 div를 생성
    const rankDiv = document.createElement('div');
    rankDiv.innerHTML = `
        <p>${groupData.group_ranking}</p>
        <p>${groupData.server}</p>
        <p>${groupData.alliance}</p>
        <p>${groupData.score}</p>
    `;

    // 해당 그룹의 div에 추가
    container.appendChild(rankDiv);
}

// all_ranking 기준으로 정렬된 데이터를 allranking ID에 추가하는 함수
function appendToAllRanking(groupData) {
    const container = document.getElementById('allranking');

    // allranking 컨테이너에 div 추가
    const rankDiv = document.createElement('div');
    rankDiv.innerHTML = `
        <div class="alliance">
            <div class="title">
                <div class="team">
                    <p>${groupData.all_ranking}</p>
                    <p>${groupData.alliance}</p>
                    <img src="https://gbtwcoupon.jisby.com/images/wwl/alliance_logo/${groupData.alliance}.png" alt>
                </div>
            </div>
        </div>
    `;

    // 해당 div를 allranking 컨테이너에 추가
    container.appendChild(rankDiv);
}

// 페이지가 로드될 때 CSV 데이터를 불러오기
loadCSV();