const cards = document.querySelectorAll('.news-card');
const modal = document.getElementById('modal');

const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalImage = document.getElementById('modal-image');

cards.forEach(card => {
    card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title;
        modalText.textContent = card.dataset.text;
        modalImage.src = card.dataset.image;
        modal.style.display = 'flex';
    });
});

document.querySelector('.close').onclick = () => {
    modal.style.display = 'none';
};

modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
};
