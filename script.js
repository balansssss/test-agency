//Carousel

const slides = [
    {
        title: 'LTD Metricon',
        description: '- experienced marketing <br> and promoting online projects <br> and products company',
        image: './assets/img/carousel/slide1.png'
    },
    {
        title: null,
        description: 'Мы предоставляем посетителей, заинтересованных в Ваших предложениях.',
        image: './assets/img/carousel/slide2.png'
    },
    {
        title: null,
        description: 'Только высококачественный трафик!',
        image: './assets/img/carousel/slide3.png'
    },
];

const carousel = document.querySelector('#carousel');
const carouselTitle = document.querySelector('#carouselTitle');
const carouselDescription = document.querySelector('#carouselDescription');
const carouselToggles = document.querySelectorAll('.carousel_toggle_item');
const carouselLeftController = document.querySelector('#carouselLeftController');
const carouselRightController = document.querySelector('#carouselRightController');


let counter = 0;

// Смена счетчика слайдера
function changeCounter(direction) {
    if (direction === 'next') {
        if (counter >= 2) {
            counter = 0;
        } else {
            counter++;
        }
    } else if (direction === 'prev') {
        if (counter === 0) {
            counter = 2;
        } else {
            counter--;
        }
    }

}

//Замена слайда
function changeSlide(slideIndex) {
    carousel.style.backgroundImage = `url("${slides[slideIndex].image}")`;
    carouselTitle.innerHTML = slides[slideIndex].title;
    carouselDescription.innerHTML = slides[slideIndex].description;

    carouselToggles.forEach((e, i) => {
        if (i === slideIndex) {
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }
    });
}

function startAutoSlides() {
    return setInterval(() => {
        changeCounter('next');
        changeSlide(counter);
    }, 3000);
}

changeSlide(counter);
let slideTimer = startAutoSlides();

// Клик по переключателям слайда
function eventController(direction) {
    clearInterval(slideTimer);
    changeCounter(direction);
    changeSlide(counter);
    slideTimer = startAutoSlides();
}

carouselRightController.addEventListener('click', () => eventController('next'));
carouselLeftController.addEventListener('click', () => eventController('prev'));


// Анимация при прокрутке

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

observer.observe(document.querySelector('#partnersAdvertising'));
observer.observe(document.querySelector('#partnersWebmasters'));
observer.observe(document.querySelector('#partnersPartners'));
observer.observe(document.querySelector('#webmastersStatisticIcon'));
observer.observe(document.querySelector('#webmastersAdvertiserIcon'));
observer.observe(document.querySelector('#webmastersStatisticDescription'));
observer.observe(document.querySelector('#webmastersAdvertiserDescription'));
observer.observe(document.querySelector('#forpartners'));
observer.observe(document.querySelector('#advertisingAdforce'));
observer.observe(document.querySelector('#advertisingUtarget'));

