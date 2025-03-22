document.getElementById('round1_ko').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'WWL 5.0 ROUND1',
                text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!',
                url: 'https://gbtwcoupon.jisby.com/wwl#round1'
            });
            console.log('공유 성공!');
        } catch (error) {
            console.error('공유 실패:', error);
        }
    } else {
        alert('이 브라우저에서는 Web Share API를 지원하지 않습니다.');
    }
});

document.getElementById('round1_us').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'WWL 5.0 ROUND1',
                text: 'Get detailed and fast updates on WWL 5.0 League A!',
                url: 'https://gbtwcoupon.jisby.com/us/wwl#round1'
            });
            console.log('공유 성공!');
        } catch (error) {
            console.error('공유 실패:', error);
        }
    } else {
        alert('이 브라우저에서는 Web Share API를 지원하지 않습니다.');
    }
});

document.getElementById('round2_ko').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'WWL 5.0 ROUND2',
                text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!',
                url: 'https://gbtwcoupon.jisby.com/wwl#round1'
            });
            console.log('공유 성공!');
        } catch (error) {
            console.error('공유 실패:', error);
        }
    } else {
        alert('이 브라우저에서는 Web Share API를 지원하지 않습니다.');
    }
});

document.getElementById('round2_us').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'WWL 5.0 ROUND2',
                text: 'Get detailed and fast updates on WWL 5.0 League A!',
                url: 'https://gbtwcoupon.jisby.com/us/wwl#round1'
            });
            console.log('공유 성공!');
        } catch (error) {
            console.error('공유 실패:', error);
        }
    } else {
        alert('이 브라우저에서는 Web Share API를 지원하지 않습니다.');
    }
});

document.getElementById('round3_ko').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'WWL 5.0 ROUND3',
                text: 'WWL 5.0 리그A의 현황을 자세하고 빠르게 알아보세요!',
                url: 'https://gbtwcoupon.jisby.com/wwl#round1'
            });
            console.log('공유 성공!');
        } catch (error) {
            console.error('공유 실패:', error);
        }
    } else {
        alert('이 브라우저에서는 Web Share API를 지원하지 않습니다.');
    }
});

document.getElementById('round3_us').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'WWL 5.0 ROUND3',
                text: 'Get detailed and fast updates on WWL 5.0 League A!',
                url: 'https://gbtwcoupon.jisby.com/us/wwl#round1'
            });
            console.log('공유 성공!');
        } catch (error) {
            console.error('공유 실패:', error);
        }
    } else {
        alert('이 브라우저에서는 Web Share API를 지원하지 않습니다.');
    }
});