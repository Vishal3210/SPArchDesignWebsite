const navLinkAnchors = document.querySelectorAll('.nav-link-anchor');
const homeMoreButton = document.querySelector('.home-content-more-button');
const contactUsButton = document.querySelector('.contact-ref-button');
let serviceSection = document.getElementById(homeMoreButton.getAttribute('data-link'));
let contactSection = document.getElementById(contactUsButton.getAttribute('data-link'));

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
    scrollToSection(serviceSection);
});

contactUsButton.addEventListener('click', () => {
    scrollToSection(contactSection);
})