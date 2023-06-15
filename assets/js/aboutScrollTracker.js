const home = document.getElementById("home");
const brief = document.getElementById("brief");
const advantages = document.getElementById("advantages");
// const execution = document.getElementById("execution");

const homeHeight = home.offsetHeight;
const briefHeight = brief.offsetHeight;
const advantagesHeight = advantages.offsetHeight;
// const executionHeight = execution.offsetHeight;

const navLinkArray = document.querySelectorAll('.nav-link');

const homeNavLink = document.querySelector('.home-nav-link');
const briefNavLink = document.querySelector('.brief-nav-link');
const advantagesNavLink = document.querySelector('.advantages-nav-link');
const executionNavLink = document.querySelector('.execution-nav-link');

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
    const briefOffset = getOffsetTop(brief) + briefHeight;
    const advantagesOffset = getOffsetTop(advantages) + advantagesHeight;
    // const executionOffset = getOffsetTop(execution) + executionHeight;

    if (scrollTop > advantagesOffset) {
        toggleActiveLink(executionNavLink);
    }
    else if (scrollTop > briefOffset) {
        toggleActiveLink(advantagesNavLink);
    }
    else if (scrollTop > homeOffset) {
        toggleActiveLink(briefNavLink);
    }
    else {
        toggleActiveLink(homeNavLink);
    }
}

document.addEventListener('scroll', scrollTracker);