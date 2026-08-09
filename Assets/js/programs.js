document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.news-card');
    const modal = document.getElementById('modal');

    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalImage = document.getElementById('modal-image');

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (!modalTitle || !modalText || !modalImage) {
                return;
            }
            modalTitle.textContent = card.dataset.title;
            modalText.textContent = card.dataset.text;
            modalImage.src = card.dataset.image;
            modal.style.display = 'flex';
        });
    });

    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeModal();
        }
    });
});
