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
            maxLen = 15;
            break;
        
        case 2:
            folder = "waidande";
            maxLen = 0;
            break;
    }
    
    for(let i=1 ; i <= maxLen ; i++) {
        let image = document.createElement('img');
        image.className = "testimonial-modal-image";
        image.src = defaultPath + folder + "/" + i + ".jpg";
        console.log(image.src);
        modal.appendChild(image);
    }
}

testimonialCards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
        modal.showModal();
        showPictures(idx);
    });
});

modalCloseButton.addEventListener('click', () => {
    modal.close();
});