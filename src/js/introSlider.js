export default function() {
    const introSlider = document.querySelector('.js-intro-slider');

    if (!introSlider) return;

    // Основные переменные

    const slides = Array.from(introSlider.querySelector('.js-intro-slider-slides').children);
    const paginationItems = Array.from(introSlider.querySelector('.js-intro-slider-pagination').children);
    const prevBtn = introSlider.querySelector('.js-intro-slider-prev');
    const nextBtn = introSlider.querySelector('.js-intro-slider-next');
    let activeSlideIndex = 0;
    let activeMark;
    let autoplayEnabled = true;
    const autoplayInterval = 3000;
    let timerID;
    let nextPaginationItemGlobal;

    // Создание метки активного элемента

    activeMark = document.createElement('span');
    activeMark.className = 'intro-slider__pagination-active-slide-mark';
    paginationItems[0].appendChild(activeMark);
    activeMark.style.transform = `translateX(${activeSlideIndex * 100}%)`;

    // Функция установки активного слайда

    function setActiveSlide(index) {
        if (index === activeSlideIndex) return;
        slides[activeSlideIndex].classList.remove('active');
        paginationItems[activeSlideIndex].classList.remove('active');
        activeSlideIndex = index;
        slides[activeSlideIndex].classList.add('active');
        paginationItems[activeSlideIndex].classList.add('active');
        console.log(`Setting active index ${activeSlideIndex}`);
        activeMark.style.transform = `translateX(${activeSlideIndex * 100}%)`;
    }

    // Функция автоплея

    function autoplay() {
        if (!autoplayEnabled) return;

        let nextActiveIndex;
        let nextPaginationItem;

        if (activeSlideIndex + 2 <= slides.length) {
            nextActiveIndex = activeSlideIndex + 1;
        } else {
            nextActiveIndex = 0;
        }

        nextPaginationItem = paginationItems[nextActiveIndex];
        nextPaginationItemGlobal = nextPaginationItem;

        const animationEndHandler = () => {
            nextPaginationItem.classList.remove('incoming');
            nextPaginationItem.style.animationDuration = '';
            nextPaginationItem.removeEventListener('animationend', animationEndHandler);
        };
        nextPaginationItem.addEventListener('animationend', animationEndHandler);
        nextPaginationItem.style.animationDuration = `${autoplayInterval / 1000}s`;
        nextPaginationItem.classList.add('incoming');

        timerID = setTimeout(function() {
            setActiveSlide(nextActiveIndex);
            autoplay();
        }, autoplayInterval);
    }

    autoplay();

    // Обработчики событий на ссылки пагинации слайдера

    paginationItems.forEach((item, index) => {
        const link = item.querySelector('a');

        link.addEventListener('click', function(event) {
            event.preventDefault();
            autoplay = false;
            if (timerID) {
                clearTimeout(timerID);
                if (nextPaginationItemGlobal) {
                    nextPaginationItemGlobal.classList.remove('incoming');
                    nextPaginationItemGlobal.style.animationDuration = '';
                }
            }
            setActiveSlide(index);
        });
    });

    // Обработчики событий для стрелок

    prevBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let nextActiveIndex;
        if (activeSlideIndex - 1 >= 0) {
            nextActiveIndex = activeSlideIndex - 1;
        } else {
            nextActiveIndex = slides.length - 1;
        }
        autoplay = false;
        if (timerID) {
            clearTimeout(timerID);
            if (nextPaginationItemGlobal) {
                nextPaginationItemGlobal.classList.remove('incoming');
                nextPaginationItemGlobal.style.animationDuration = '';
            }
        }
        setActiveSlide(nextActiveIndex);
    });
    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let nextActiveIndex;
        if (activeSlideIndex + 1 < slides.length) {
            nextActiveIndex = activeSlideIndex + 1;
        } else {
            nextActiveIndex = 0;
        }
        autoplay = false;
        if (timerID) {
            clearTimeout(timerID);
            if (nextPaginationItemGlobal) {
                nextPaginationItemGlobal.classList.remove('incoming');
                nextPaginationItemGlobal.style.animationDuration = '';
            }
        }
        setActiveSlide(nextActiveIndex);
    });
}