const navLinkAnchors = document.querySelectorAll('.nav-link-anchor');
const homeMoreButton = document.querySelector('.home-content-more-button');

const scrollToSection = (targetSection) => {
    targetSection.scrollIntoView();
}

navLinkAnchors.forEach((e) => {
    e.addEventListener('click', () => {
        let targetSection = document.getElementById(e.getAttribute("data-link"));
        scrollToSection(targetSection);
    });
});

homeMoreButton.addEventListener('click', () => {
    let serviceSection = document.getElementById(homeMoreButton.getAttribute('data-link'));
    scrollToSection(serviceSection);
});