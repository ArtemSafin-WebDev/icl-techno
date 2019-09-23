import Swiper from 'swiper/dist/js/swiper.js';

export default function() {
    const homeNewsSlider = document.querySelector('.js-documents-slider');

    if (!homeNewsSlider) return;

    let sliderInstance = null;
    const sliderShowBreakpoint = 768;

    const swiperContainer = homeNewsSlider;
    const swiperContainerOriginalClassName = homeNewsSlider.className;
    const swiperWrapper = homeNewsSlider.querySelector('.documents__list');
    const swiperWrapperOriginalClassName = swiperWrapper.className;
    const swiperSlides = Array.from(swiperWrapper.querySelectorAll('.documents__list-item'));
    const swiperSlideOriginalClassName = swiperSlides[0].className;

    function mountSlider() {
        swiperContainer.className = 'swiper-container';
        swiperWrapper.className = 'swiper-wrapper';
        swiperSlides.forEach(slide => {
            slide.className = 'swiper-slide';
        })

        sliderInstance = new Swiper(swiperContainer, {
            slidesPerView: 'auto',
            spaceBetween: 20,
           
        })
    }


    function destroySlider() {
        if (sliderInstance) {
            swiperContainer.className = swiperContainerOriginalClassName;
            swiperWrapper.className = swiperWrapperOriginalClassName;
            swiperSlides.forEach(slide => {
                slide.className = swiperSlideOriginalClassName;
            }) 

            sliderInstance.destroy();
            sliderInstance = null;
        }
    }


    if (matchMedia) {
        const mq = window.matchMedia(`(max-width: ${sliderShowBreakpoint}px)`);
        mq.addListener(widthChange);
        widthChange(mq);
    }

    function widthChange(mq) {
        if (mq.matches) {
            mountSlider();
        } else if (!mq.matches) {
            destroySlider();
        }
    }
}