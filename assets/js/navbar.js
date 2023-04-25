const navBar = document.querySelector(".nav");
const navLinkContainer = document.querySelector(".nav-link-container");
const navLinkButton = document.querySelector(".nav-link-button");

document.addEventListener("scroll", (e) => {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop)
    if(scrollTop > 0) {
      navBar.classList.add("nav-shadow");
    }
    else {
      navBar.classList.remove("nav-shadow");
    }
  })

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