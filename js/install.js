const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  const prompt = event.prompt();
  prompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User installed app');
    } else {
      console.log('User dismissed the install prompt');
    }
  });
});

installBtn.addEventListener('click', () => {
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User installed app');
      } else {
        console.log('User dismissed the install prompt');
      }
      window.deferredPrompt = null;
    });
  }
});
