const modal = document.querySelector(".testimonial-card-modal");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const modalCloseButton = document.querySelector(".close-modal-button");

testimonialCards.forEach(card => {
    card.addEventListener('click', () => {
        modal.showModal();
    });
});

modalCloseButton.addEventListener('click', () => {
    modal.close();
});