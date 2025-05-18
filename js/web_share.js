document.addEventListener('DOMContentLoaded', () => {
    // 여러 링크 배열 (각각 다른 ID에 맞게 설정)
    const links = {
        round1_ko: { title: 'WWL 5.0 ROUND1', text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!', url: 'https://gbtwcoupon.jisby.com/wwl#round1' },
        round2_ko: { title: 'WWL 5.0 ROUND2', text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!', url: 'https://gbtwcoupon.jisby.com/wwl#round2' },
        round3_ko: { title: 'WWL 5.0 ROUND3', text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!', url: 'https://gbtwcoupon.jisby.com/wwl#round3' },
        round4_ko: { title: 'WWL 5.0 ROUND4', text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!', url: 'https://gbtwcoupon.jisby.com/wwl#round4' },
        round5_ko: { title: 'WWL 5.0 ROUND5', text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!', url: 'https://gbtwcoupon.jisby.com/wwl#round5' },
        final: { title: 'WWL 5.0 Fianl', text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!', url: 'https://gbtwcoupon.jisby.com/wwl#final' }
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
                        console.log('Share success!');
                    } catch (error) {
                        console.error('Sharing failed:', error);
                    }
                } else {
                    alert('This browser does not support the Web Share API.');
                }
            });
        }
    });
});