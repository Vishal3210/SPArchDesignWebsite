const galleryContentMainSection = document.querySelector('.gallery-content-main-section');
// const individualWorkImageSection = document.querySelector('.individual-work-image-section');
// const individualWorkImageCards = document.querySelectorAll('.individual-work-image-card');

const baseDir = '/assets/images/testimonials/'

const individuals = {
    thakur : {
        dir : 'thakur/',
        name : 'Kavita Thakur',
        address: 'Lakeshore Greens, Palava, Dombivli(E)',
        rating: 5.0,
        workCards: {
            safetyDoor: {
                workDir : 'safetyDoor/',
                cardName : 'Safety Door',
                imageCount : 4
            },
            livingRoom: {
                workDir : 'livingRoom/',
                cardName : 'Living Room',
                imageCount : 4
            },
            poojaRoom: {
                workDir : 'poojaRoom/',
                cardName : 'Pooja Room',
                imageCount : 5
            },
            kitchen: {
                workDir : 'kitchen/',
                cardName : 'Kitchen',
                imageCount : 4
            },
            gamingRoom: {
                workDir : 'gamingRoom/',
                cardName : 'Gaming Room',
                imageCount : 12
            },
            bedroom: {
                workDir : 'bedroom/',
                cardName : 'Bedroom',
                imageCount : 5
            }
        }
    },
    bhalerao : {
        dir : 'bhalerao/',
        name : 'Deepak Bhalerao',
        address: 'Sarv Shramik Sangh, LT Rd, Dadar(E)',
        rating: 5.0,
        workCards: {
            kitchenDesign: {
                workDir : 'kitchenDesign/',
                cardName : 'Kitchen Design',
                imageCount : 3
            },
            storageCabinets: {
                workDir : 'storageCabinets/',
                cardName : 'Storage Cabinets',
                imageCount : 4
            }
        }
    },
    panchal : {
        dir : 'panchal/',
        name : 'Vinayak Panchal',
        address: 'Sagar Avenue, Vakola, Santacruz(E)',
        rating: 5.0,
        workCards: {
            safetyDoor: {
                workDir : 'safetyDoor/',
                cardName : 'Safety Door',
                imageCount : 1
            },
            livingRoom: {
                workDir : 'livingRoom/',
                cardName : 'Living Room',
                imageCount : 3
            },
            tvUnit: {
                workDir : 'tvUnit/',
                cardName : 'TV Unit',
                imageCount : 3
            }
        }
    },
    amberkar : {
        dir : 'amberkar/',
        name : 'Sagar Amberkar',
        address: 'Sahar Tower, Chakala, Andheri(E)',
        rating: 5.0,
        workCards: {
            entrance: {
                workDir : 'entrance/',
                cardName : 'Entrance',
                imageCount : 2
            },
            tvUnit: {
                workDir : 'tvUnit/',
                cardName : 'TV Unit',
                imageCount : 3
            },
            barCounter: {
                workDir : 'barCounter/',
                cardName : 'Bar Counter',
                imageCount : 3
            },
            kitchen: {
                workDir : 'kitchen/',
                cardName : 'Kitchen',
                imageCount : 3
            }
        }
    },
    waidande : {
        dir : 'waidande/',
        name : 'Waidande',
        address: 'Tandice 69, Gundavali, Andheri(E)',
        rating: 5.0,
        workCards: {
            safetyDoor: {
                workDir : 'safetyDoor/',
                cardName : 'Safety Door',
                imageCount : 5
            },
            bookshelf: {
                workDir : 'bookshelf/',
                cardName : 'Bookshelf',
                imageCount : 3
            }
        }
    },
    achrekar : {
        dir : 'achrekar/',
        name : 'Shailesh Achrekar',
        address: 'Tandice 69, Gundavali, Andheri(E)',
        rating: 4.5,
        workCards: {
            entrance: {
                workDir : 'entrance/',
                cardName : 'Entrance',
                imageCount : 3
            },
            livingRoom: {
                workDir : 'livingRoom/',
                cardName : 'Living Room',
                imageCount : 3
            },
            diningArea: {
                workDir : 'diningArea/',
                cardName : 'Dining Area',
                imageCount : 3
            },
            masterBedroom: {
                workDir : 'masterBedroom/',
                cardName : 'Master Bedroom',
                imageCount : 3
            }
        }
    }
}


const fillup = (individual) => {

    let individualDir = baseDir + individual.dir;

    let individualWork = document.createElement('div');
    individualWork.className = 'individual-work flex flex-row';

    let individualWorkCard = document.createElement('div');
    individualWorkCard.className = 'individual-work-card flex flex-col';

    let individualWorkName = document.createElement('h2');
    individualWorkName.className = 'individual-work-name';
    individualWorkName.innerHTML = individual.name;

    let individualWorkAddress = document.createElement('p');
    individualWorkAddress.className = 'individual-work-address para-color';
    individualWorkAddress.innerHTML = individual.address;

    let individualWorkRating = document.createElement('div');
    individualWorkRating.className = 'individual-work-rating';
    let i = 1
    while (i <= individual.rating) {
        let ratingStar = document.createElement('i');
        ratingStar.className = 'fa-solid fa-star';
        individualWorkRating.appendChild(ratingStar);
        i++;
    }
    if ((i - individual.rating) == 0.5) {
        let ratingStar = document.createElement('i');
        ratingStar.className = 'fa-regular fa-star-half-stroke';
        individualWorkRating.appendChild(ratingStar);
    }

    individualWorkCard.innerHTML += individualWorkName.outerHTML + individualWorkAddress.outerHTML + individualWorkRating.outerHTML;


    let individualWorkImageSection = document.createElement('div');
    individualWorkImageSection.className = 'individual-work-image-section flex flex-row';

    for (workCard in individual.workCards) {
        let individualWorkImageCard = document.createElement('div');
        individualWorkImageCard.className = 'individual-work-image-card';

        let individualWorkImageCardCategory = document.createElement('h2');
        individualWorkImageCardCategory.className = 'individual-work-image-card-category';
        individualWorkImageCardCategory.innerHTML = individual.workCards[workCard].cardName;
        individualWorkImageCardCategory.style.pointerEvents = "none";

        let individualWorkImageCardBackImage = document.createElement('img');
        individualWorkImageCardBackImage.className = 'individual-work-image-card-back-img';
        individualWorkImageCardBackImage.src = individualDir + individual.workCards[workCard].workDir + 'main.jpg';
        individualWorkImageCardBackImage.alt = workCard;
        individualWorkImageCardBackImage.style.pointerEvents = "none";

        individualWorkImageCard.innerHTML += individualWorkImageCardCategory.outerHTML + individualWorkImageCardBackImage.outerHTML;

        individualWorkImageCard.id = individualDir + individual.workCards[workCard].workDir + individual.workCards[workCard].imageCount;

        individualWorkImageSection.append(individualWorkImageCard);
    }

    individualWork.innerHTML += individualWorkCard.outerHTML + individualWorkImageSection.outerHTML;

    galleryContentMainSection.appendChild(individualWork);
}

for (let individual in individuals) {
    fillup(individuals[individual]);
}