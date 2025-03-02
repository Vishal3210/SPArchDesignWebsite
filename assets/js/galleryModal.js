const modal = document.querySelector(".gallery-modal");
const individualWorkImageCards = document.querySelectorAll(".individual-work-image-card");
const modalCloseButton = document.querySelector(".close-modal-button");

const defaultPath = "assets/images/testimonials/";

const showPictures = (id) => {
    
    // Change based on the number of images in the folders

    let splitId = id.split("/");
    let imageCount = parseInt(splitId.pop());
    let imageLocation = splitId.join("/") + "/";

    for(let i=1 ; i <= imageCount ; i++) {
        let image = document.createElement('img');
        image.className = "testimonial-modal-image";
        image.src = imageLocation + i + ".jpg";
        modal.appendChild(image);
    }
}

const removePictures = () => {
    const testimonialModalImages = document.querySelectorAll(".testimonial-modal-image");
    testimonialModalImages.forEach((image) => {
        image.remove();
    })
}

// Commented for removing modal functionality from main page and adding it to a separate page

individualWorkImageCards.forEach((card) => {
    card.addEventListener('click', (e) => {
        idx = e.target.id
        console.log(idx);
        showPictures(idx);
        modal.showModal();
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
        modal.close();
        removePictures();
    }
});