const carousel = document.querySelector('.why-choose-us-carousel');
const cardWidth = document.querySelector('.why-choose-us-card').offsetWidth;

const carouselChildren = [...carousel.children];

let cardPerView = Math.round(carousel.offsetWidth / cardWidth);

carouselChildren.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildren.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

const getTranslateX = (e) => {
    const style = window.getComputedStyle(e);
    const matrix = new DOMMatrixReadOnly(style.transform)
    return matrix.m41
}
// let translateXVal = 
// const infiniteScrollingSlider = () => {
//     let translateXVal = Math.ceil(getTranslateX(carousel))

//     if (translateXVal + cardWidth >= (7 * cardWidth)) {
//         console.log("Yes")
//         carousel.style.transition = "none";
//         carousel.style.transform = 'translateX(' + 0 + 'px)';
//         carousel.style.transition = "all 1s ease";
//     }
//     else {
//         translateXVal -= cardWidth
//         carousel.style.transform = 'translateX(' + translateXVal + 'px)';
//         console.log(carousel.style.tranform)
//     }
//     // carousel.scrollLeft = carousel.scrollLeft + cardWidth >= carousel.scrollWidth - carousel.offsetWidth ? carousel.scrollWidth - carousel.offsetWidth : carousel.scrollLeft + cardWidth
//     // carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth
// }

const infiniteScroll = () => {
    // if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    //     carousel.classList.add("no-transition");
    //     carousel.scrollLeft = carousel.offsetWidth
    //     carousel.classList.remove("no-transition");
    // }

    let translateXVal = getTranslateX(carousel)

    if (translateXVal >= carousel.clientWidth) {
        console.log("yes")
        carousel.classList.add("no-transition");
        carousel.style.transform = "translateX(0px)";
        carousel.classList.remove("no-transition");
    }
}

let carouselSliderTimer = setInterval(infiniteScroll, 500);

// carousel.addEventListener("scroll", infiniteScroll)

// carousel.addEventListener("mouseover", () => {
//     clearInterval(carouselSliderTimer);
// });

// carousel.addEventListener("mouseout", () => {
//     carouselSliderTimer = setInterval(infiniteScrollingSlider, 1000);
// })