export function displayMessage(messageType, message, messageTarget) {
  const element = document.querySelector(messageTarget);

  element.innerHTML = `<p class="${messageType}">${message}</p>`;
}
