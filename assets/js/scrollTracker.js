const home = document.getElementById("home-content");
const services = document.getElementById("services-content");
const about = document.getElementById("about-content");
const contact = document.getElementById("contact-content");

const homeHeight = home.offsetHeight;
const servicesHeight = services.offsetHeight;
// const aboutHeight = about.offsetHeight;
// const contactHeight = contact.offsetHeight;

const homeNavLink = document.querySelector('.home-nav-link');
const servicesNavLink = document.querySelector('.services-nav-link');
const aboutNavLink = document.querySelector('.about-nav-link');
const contactNavLink = document.querySelector('.contact-nav-link');

const getOffsetTop = (e) => {
    let offsetTop = 0;
    do {
        if ( !isNaN( e.offsetTop ) )
        {
            offsetTop += e.offsetTop;
        }
      } while( e = e.offsetParent );
      return offsetTop;
}

const scrollTracker = () => {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const homeOffset = getOffsetTop(home) + homeHeight;
    const servicesOffset = getOffsetTop(services) + servicesHeight;
    // const aboutOffset = getOffsetTop(about) + aboutHeight;
    // const contactOffset = getOffsetTop(contact) + contactHeight;

    // if (scrollTop > aboutOffset) {
    //     contactNavLink.classList.add('link-active');
    //     homeNavLink.classList.remove('link-active');
    //     servicesNavLink.classList.remove('link-active');
    //     aboutNavLink.classList.remove('link-active');
    // }
    console.log("ScrollTop: " + scrollTop);
    console.log("HomeOffset: " + homeOffset);
    console.log("ServicesOffset: " + servicesOffset);
    if (scrollTop > servicesOffset) {
        aboutNavLink.classList.add('link-active');
        homeNavLink.classList.remove('link-active');
        servicesNavLink.classList.remove('link-active');
        contactNavLink.classList.remove('link-active');
    }
    else if (scrollTop > homeOffset) {
        servicesNavLink.classList.add('link-active');
        homeNavLink.classList.remove('link-active');
        aboutNavLink.classList.remove('link-active');
        contactNavLink.classList.remove('link-active');
    }
    else {
        homeNavLink.classList.add('link-active');
        servicesNavLink.classList.remove('link-active');
        aboutNavLink.classList.remove('link-active');
        contactNavLink.classList.remove('link-active');
    }
}

document.addEventListener('scroll', scrollTracker);