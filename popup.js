document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get({ buttons: [] }, (result) => {
    const buttonContainer = document.getElementById('buttonContainer');
    result.buttons.forEach(buttonData => {
      const buttonElement = document.createElement('div');
      buttonElement.innerHTML = `<a href="${buttonData.url}" target="_blank">${buttonData.button.html}</a>`;

      const button = buttonElement.querySelector('button');
      if (button) {
        Object.assign(button.style, buttonData.button.styles);
      }

      buttonContainer.appendChild(buttonElement);
    });
  });
});

