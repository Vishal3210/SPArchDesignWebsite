const navLinkAnchors = document.querySelectorAll('.nav-link-anchor');

navLinkAnchors.forEach((e) => {
    e.addEventListener('click', () => {
        let el = document.getElementById(e.getAttribute("data-link"));
        el.scrollIntoView();
    });
});