const prevButton = document.querySelector(".our-services-navigation-button.prev");
const nextButton = document.querySelector(".our-services-navigation-button.next");

const ourServicesCards = document.querySelectorAll(".our-services-main-content-card");

const navigationButtons = document.querySelectorAll(".our-services-navigation-button");
const pausePlayButtons = document.querySelectorAll(".our-services-button");

const displayServicesCard = (idx) => {
    ourServicesCards[idx].classList.add('active');
}

let cardInterval;
const setCardInterval = () => {
    cardInterval = setInterval(autoServicesCardSlider, 5000);
}

const clearCardInterval = () => {
    clearInterval(cardInterval);
}

let paused = false;

const setPausePlayState = () => {
    if (paused) {
        pausePlayButtons[0].classList.remove('active');
        pausePlayButtons[1].classList.add('active');
    }
    else {
        pausePlayButtons[0].classList.add('active');
        pausePlayButtons[1].classList.remove('active');    
    }
}

const autoServicesCardSlider = () => {
    ourServicesCards.forEach((card, index) => {
        if(card.classList.contains('active')) {
            let tempIndex = index + 1 >= ourServicesCards.length ? 0 : index + 1;
            card.classList.remove('active');
            cardShowTimeout = setTimeout(displayServicesCard, 500, tempIndex);
            return;
        }
    });
}

pausePlayButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('pause')) {
            clearCardInterval();
            paused = true;
            setPausePlayState();
        }
        else {
            setCardInterval();
            paused = false;
            setPausePlayState();
        }
    });
});

navigationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        ourServicesCards.forEach((card, index) => {
            if(card.classList.contains('active')) {
                let tempIndex
                if (button.classList.contains('prev')) {
                    tempIndex = index - 1 < 0 ? ourServicesCards.length - 1 : index - 1;
                }
                else {
                    tempIndex = index + 1 >= ourServicesCards.length ? 0 : index + 1;  
                }
                card.classList.remove('active');
                cardShowTimeout = setTimeout(displayServicesCard, 500, tempIndex);
                if (!paused) {
                    clearCardInterval();
                    setCardInterval();
                }
                return;
            }
        });
    });
});

setCardInterval();