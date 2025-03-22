document.getElementById('round1_ko').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'WWL 5.0 ROUND2 현황판',
                text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!',
                url: window.location.href
            });
            console.log('공유 성공!');
        } catch (error) {
            console.error('공유 실패:', error);
        }
    } else {
        alert('이 브라우저에서는 Web Share API를 지원하지 않습니다.');
    }
});