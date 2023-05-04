const carouselImgs = document.querySelectorAll('.about-content-carousel-img');

let index = 1;

const carouselImgSelector = () => {
    console.log(index);
    let i = 0;
    for (i ; i < carouselImgs.length ; i++) {
        if (i === index) {
            carouselImgs[i].classList.add('carousel-img-active');
            index = index + 1 >= carouselImgs.length ? 0 : index + 1;
            break;
        }
    }
}

const autoCarouselMover = () => {
    carouselImgs.forEach((img) => {
        img.classList.remove('carousel-img-active');
    });
    carouselTimeout = setTimeout(carouselImgSelector, 500);
}

const carouselInterval = setInterval(autoCarouselMover, 5000);