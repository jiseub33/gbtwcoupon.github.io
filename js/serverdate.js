function getServerTime() {
    return fetch(window.location.href, { method: 'HEAD' })
        .then(response => response.headers.get('date'))
        .then(serverDate => {
            const date = new Date(serverDate);
            date.setHours(date.getHours() + 9);
            return date;
        })
        .catch(error => {
            console.error('Error fetching server time:', error);
            return new Date();
        });
}

getServerTime().then(serverTime => {
    console.log('Server time (KST):', serverTime);
});
