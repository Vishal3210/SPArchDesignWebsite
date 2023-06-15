const navLinkAnchors = document.querySelectorAll('.nav-link-anchor');

const scrollToSection = (targetSection) => {
    targetSection.scrollIntoView();
}

navLinkAnchors.forEach((e) => {
    e.addEventListener('click', () => {
        let targetSection = document.getElementById(e.getAttribute("data-link"));
        scrollToSection(targetSection);
    });
});