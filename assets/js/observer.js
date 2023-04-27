const dataCardArray = document.querySelectorAll('.services-content-data-card');

const servicesContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            dataCardArray.forEach((card) => {
                card.classList.add('data-card-animation');
            })
        }
        else {
            dataCardArray.forEach((card) => {
                card.classList.remove('data-card-animation');
            })
        }
    })
})

const servicesContent = document.querySelector('.services-content');
servicesContentObserver.observe(servicesContent);