document.addEventListener('DOMContentLoaded', () => {
    // 여러 링크 배열 (각각 다른 ID에 맞게 설정)
    const links = {
        round1_us: { title: 'WWL 5.0 ROUND1', text: 'Get detailed and fast updates on WWL 5.0 League A!', url: 'https://gbtwcoupon.jisby.com/us/wwl#round1' },
        round2_us: { title: 'WWL 5.0 ROUND2', text: 'Get detailed and fast updates on WWL 5.0 League A!', url: 'https://gbtwcoupon.jisby.com/us/wwl#round2' },
        round3_us: { title: 'WWL 5.0 ROUND3', text: 'Get detailed and fast updates on WWL 5.0 League A!', url: 'https://gbtwcoupon.jisby.com/us/wwl#round3' },
        round4_us: { title: 'WWL 5.0 ROUND4', text: 'Get detailed and fast updates on WWL 5.0 League A!', url: 'https://gbtwcoupon.jisby.com/us/wwl#round4' },
        round5_us: { title: 'WWL 5.0 ROUND5', text: 'Get detailed and fast updates on WWL 5.0 League A!', url: 'https://gbtwcoupon.jisby.com/us/wwl#round5' }
    };

    // 각 버튼에 대한 클릭 이벤트 리스너 등록
    Object.keys(links).forEach((buttonId) => {
        const button = document.getElementById(buttonId);

        if (button) {
            button.addEventListener('click', async () => {
                const currentLink = links[buttonId];

                if (navigator.share) {
                    try {
                        await navigator.share({
                            title: currentLink.title,
                            text: currentLink.text,
                            url: currentLink.url
                        });
                        console.log('공유 성공!');
                    } catch (error) {
                        console.error('공유 실패:', error);
                    }
                } else {
                    alert('이 브라우저에서는 Web Share API를 지원하지 않습니다.');
                }
            });
        }
    });
});