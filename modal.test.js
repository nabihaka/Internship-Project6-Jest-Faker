// modal.test.js
// Import fungsi yang akan diuji
import { showModal } from './modal';

var modal;
var modalMessage;
var closeModal;

describe('Modal Functions', () => {
    // Setup DOM sebelum setiap tes
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="feedbackModal" style="display: none;">
                <div class="modal-message"></div>
                <span class="close">&times;</span>
            </div>
        `;
        // Reset modal display untuk setiap tes
        modal = document.getElementById("feedbackModal");
        modalMessage = document.querySelector(".modal-message");
        closeModal = document.querySelector(".close");

        // Tambahkan event listener untuk closeModal
        closeModal.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    });

    test('should display the modal with the correct message and class', () => {
        showModal(modal, modalMessage, 'Test message', 'success');
        
        expect(modal.style.display).toBe('block');
        expect(modalMessage.textContent).toBe('Test message');
        expect(modalMessage.classList.contains('success')).toBe(true);
    });

    test('should close the modal when close button is clicked', () => {
        showModal(modal, modalMessage, 'Test message', 'success');
        closeModal.click();
        
        expect(modal.style.display).toBe('none');
    });

    test('should close the modal when clicking outside', () => {
        showModal(modal, modalMessage, 'Test message', 'success');
        window.onclick({ target: modal });
        
        expect(modal.style.display).toBe('none');
    });
});
