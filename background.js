chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'saveButton') {
    chrome.storage.local.get({ buttons: [] }, (result) => {
      const buttons = result.buttons;
      buttons.push({ button: request.button, url: sender.tab.url, timestamp: new Date() });
      chrome.storage.local.set({ buttons: buttons }, () => {
        console.log('Button saved');
      });
    });
  }
});

