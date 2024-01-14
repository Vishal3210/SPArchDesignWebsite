const modal = document.querySelector(".testimonial-card-modal");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const modalCloseButton = document.querySelector(".close-modal-button");

const defaultPath = "assets/images/testimonials/";

const showPictures = (idx) => {
    
    // Change based on the number of images in the folders
    let folder, maxLen;
    switch (idx) {
        case 0:
            folder = "more";
            maxLen = 0;
            break;
        
        case 1:
            folder = "achrekar";
            maxLen = 14;
            break;
        
        case 2:
            folder = "waidande";
            maxLen = 6;
            break;
    }
    
    for(let i=1 ; i <= maxLen ; i++) {
        let image = document.createElement('img');
        image.className = "testimonial-modal-image";
        image.src = defaultPath + folder + "/" + i + ".jpg";
        modal.appendChild(image);
    }
}

const removePictures = () => {
    const testimonialModalImages = document.querySelectorAll(".testimonial-modal-image");
    testimonialModalImages.forEach((image) => {
        image.remove();
    })
}

testimonialCards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
        modal.showModal();
        showPictures(idx);
    });
});

modalCloseButton.addEventListener('click', () => {
    modal.close();
    removePictures();
});

modal.addEventListener('click', (e) => {
    const modalDimensions = modal.getBoundingClientRect();

    if (
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
    ) {
        removePictures();
        modal.close();
    }
});