const home = document.getElementById("home-content");
const services = document.getElementById("services-content");
const about = document.getElementById("about-content");
const contact = document.getElementById("contact-content");

const homeHeight = home.offsetHeight;
const servicesHeight = services.offsetHeight;
// const aboutHeight = about.offsetHeight;
// const contactHeight = contact.offsetHeight;

const navLinkArray = document.querySelectorAll('.nav-link');

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

const toggleActiveLink = (target) => {
    navLinkArray.forEach((link) => {
        if(link === target) {
            link.classList.add('link-active');
        }
        else {
            link.classList.remove('link-active');
        }
    });
}

const scrollTracker = () => {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const homeOffset = getOffsetTop(home) + homeHeight;
    const servicesOffset = getOffsetTop(services) + servicesHeight;
    // const aboutOffset = getOffsetTop(about) + aboutHeight;
    // const contactOffset = getOffsetTop(contact) + contactHeight;

    // if (scrollTop > aboutOffset) {
    //     toggleActiveLink(contactNavLink);
    // }
    if (scrollTop > servicesOffset) {
        toggleActiveLink(aboutNavLink);
    }
    else if (scrollTop > homeOffset) {
        toggleActiveLink(servicesNavLink);
    }
    else {
        toggleActiveLink(homeNavLink);
    }
}

document.addEventListener('scroll', scrollTracker);