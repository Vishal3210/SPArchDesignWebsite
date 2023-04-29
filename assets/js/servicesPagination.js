const dataCards = document.querySelectorAll('.services-content-data-card-lg');
const dataCardLen = dataCards.length
const dataCardContainer = document.getElementById('data-card-container');
const dataCardContainerHeight = dataCardContainer.clientHeight;
const prev = document.getElementById('services-content-data-card-container-prev');
const next = document.getElementById('services-content-data-card-container-next');

const activeDot = document.createElement('div');
activeDot.className = 'activeDotNavItem';
dataCardContainer.appendChild(activeDot);

const createDotNavItem = (index) => {
    const dot = document.createElement('div');
    dot.className = 'dotNavItem';
    dot.id = index;

    let topValue = (dataCardContainerHeight / dataCardLen) * index;

    dot.style.top = topValue + dataCardContainerHeight/(dataCardLen*2) + 'px';

    dataCardContainer.appendChild(dot);
}

const setActiveDotTopValue = (activeDotTopValue) => {
    activeDot.style.top = activeDotTopValue;
}

const shiftActiveDot = (index) => {
    activeDot.style.top = dotNavs[index].style.top;
}

const shiftDataCard = (index) => {
    dataCards.forEach((card, idx) => {
        card.style.opacity = '0';
        console.log('idx: ' + idx);
        console.log('index: ' + index);
        if (idx < index) {
            card.style.transform = `translate(-${100 * (index - idx)}, -100%)`;
        }
        else if (idx > index) {
            card.style.transform = `translate(-${100 * (idx - index - 1)}%, 0%)`;
        }
        else {
            card.style.opacity = '1';
            card.style.transform = `translate(-${100 * index}%, 0%)`;
        }
    });
}

// const autoSlideDataCard = () => {
//     for 
// }

prev.addEventListener('click', () => {
    let i = 0;

    for (i = 0 ; i < dotNavs.length ; i++) {
        let dot = dotNavs[i];
        if (activeDot.style.top == dot.style.top){
            let activeDotIndex = dot.id;
            let prevDotIndex = parseInt(activeDotIndex) - 1;
            prevDotIndex = prevDotIndex < 0 ? dotNavs.length - 1 : prevDotIndex;
            shiftActiveDot(prevDotIndex);
            shiftDataCard(prevDotIndex);
            break;
        }
    }
});

next.addEventListener('click', () => {
    let i = 0;

    for (i = 0 ; i < dotNavs.length ; i++) {
        let dot = dotNavs[i];
        if (activeDot.style.top == dot.style.top){
            let activeDotIndex = dot.id;
            let nextDotIndex = parseInt(activeDotIndex) + 1;
            nextDotIndex = nextDotIndex >= dotNavs.length ? 0 : nextDotIndex;
            shiftActiveDot(nextDotIndex);
            shiftDataCard(nextDotIndex);
            break;
        }
    }
});

dataCards.forEach((card, index) => {
    createDotNavItem(index);
});

const dotNavs = document.querySelectorAll('.dotNavItem');

dotNavs.forEach((dot) => {
    dot.addEventListener('click', () => {
        shiftActiveDot(dot.id);
        shiftDataCard(dot.id);
    });
});

let activeDotTopValue = dotNavs[0].style.top;
setActiveDotTopValue(activeDotTopValue);

// navButtonDisplayToggle();