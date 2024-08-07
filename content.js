function detectButtons() {
  return document.querySelectorAll('button');
}

function collectButtonData(button) {
  const styles = window.getComputedStyle(button);
  const styleObj = {};
  for (let i = 0; i < styles.length; i++) {
    const styleName = styles[i];
    styleObj[styleName] = styles.getPropertyValue(styleName);
  }


  return {
    text: button.textContent,
    html: button.outerHTML,
    styles: styleObj
  }
}

// Event listener for button clicks
function addClickListeners(buttons) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonData = collectButtonData(button);
      chrome.runtime.sendMessage({ action: 'saveButton', button: buttonData });
    });
  });
}


// Initialize detection and event listeners
const buttons = detectButtons();
addClickListeners(buttons);

