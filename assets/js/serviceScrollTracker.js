const home = document.getElementById("home");
const service = document.getElementById("service");
const edesign = document.getElementById("e-design");
// const steps = document.getElementById("steps");

const homeHeight = home.offsetHeight;
const serviceHeight = service.offsetHeight;
const edesignHeight = edesign.offsetHeight;
// const stepsHeight = steps.offsetHeight;

const navLinkArray = document.querySelectorAll('.nav-link');

const homeNavLink = document.querySelector('.home-nav-link');
const serviceNavLink = document.querySelector('.service-nav-link');
const edesignNavLink = document.querySelector('.e-design-nav-link');
const stepsNavLink = document.querySelector('.steps-nav-link');

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
    const serviceOffset = getOffsetTop(service) + serviceHeight;
    const edesignOffset = getOffsetTop(edesign) + edesignHeight;
    // const stepsOffset = getOffsetTop(steps) + stepsHeight;

    if (scrollTop > edesignOffset) {
        toggleActiveLink(stepsNavLink);
    }
    else if (scrollTop > serviceOffset) {
        toggleActiveLink(edesignNavLink);
    }
    else if (scrollTop > homeOffset) {
        toggleActiveLink(serviceNavLink);
    }
    else {
        toggleActiveLink(homeNavLink);
    }
}

document.addEventListener('scroll', scrollTracker);