const prevButton = document.querySelector(".our-services-navigation-button.prev");
const nextButton = document.querySelector(".our-services-navigation-button.next");

const ourServicesCards = document.querySelectorAll(".our-services-main-content-card");

const displayServicesCard = (idx) => {
    ourServicesCards.forEach((card, index) => {
        card.classList.remove('active');
        if (idx == index) {
            console.log(index);
            card.classList.add('active');
        }
    });
}

const autoServicesCardSlider = () => {
    
}