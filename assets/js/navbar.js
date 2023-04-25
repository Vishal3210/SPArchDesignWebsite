navBar = document.querySelector(".nav");
navLinkContainer = document.querySelector(".nav-link-container");
navLinkButton = document.querySelector(".nav-link-button");

navLinkButton.onclick = () => {
  navBar.classList.toggle("nav-active");
  navLinkContainer.classList.toggle("nav-link-container-active");
  navLinkButton.classList.toggle("nav-link-button-active");
};

document.addEventListener("mouseup", (e) => {
  if (!navBar.contains(e.target)) {
    if (navLinkButton.classList.contains("nav-link-button-active")) {
      navBar.classList.toggle("nav-active");
      navLinkContainer.classList.toggle("nav-link-container-active");
      navLinkButton.classList.toggle("nav-link-button-active");
    }
  }
});