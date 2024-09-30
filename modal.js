// modal.js
export function showModal(modal, modalMessage, message, type) {
    modalMessage.textContent = message;
    modalMessage.classList.add(type);
    modal.style.display = "block";
}
