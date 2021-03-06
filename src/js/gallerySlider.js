import Swiper from 'swiper';

export default function() {
    const gallerySliders = Array.from(document.querySelectorAll('.js-gallery-slider'));

    for (const gallerySlider of gallerySliders) {
    
        const gallerySliderMain = gallerySlider.querySelector('.js-gallery-slider-main');
        const gallerySliderThumbs = gallerySlider.querySelector('.js-gallery-slider-thumbs');

        if (!gallerySliderMain) {
            console.error('No main container in gallery slider');
            return;
        }

        const gallerySliderThumbnailsToMove = Array.from(gallerySlider.querySelectorAll('.gallery-slider__thumb-hidden-container .gallery-slider__thumbs-card'));


        const containerMain = gallerySliderMain.querySelector('.swiper-container');
        if (!containerMain) {
            console.error('No swiper container for: ', gallerySlider);
            return;
        }

        const sliderOptions = {
            navigation: {
                prevEl: gallerySlider.querySelector('.js-gallery-slider-prev'),
                nextEl: gallerySlider.querySelector('.js-gallery-slider-next')
            },
            thumbs: {}
        };

        if (gallerySliderThumbs && gallerySliderThumbnailsToMove !== 0) {
            const containerThumbs = gallerySliderThumbs.querySelector('.swiper-container');
            const wrapperThumbs = gallerySliderThumbs.querySelector('.swiper-wrapper');
            
            gallerySliderThumbnailsToMove.forEach(thumbCard => {
                const swiperSlide = document.createElement('div');
                swiperSlide.className = 'swiper-slide';
                swiperSlide.appendChild(thumbCard);
                thumbCard.parentElement.remove();
                wrapperThumbs.appendChild(swiperSlide);
            })

            sliderOptions.thumbs.swiper = new Swiper(containerThumbs, {
                slidesPerView: 4,
                spaceBetween: 10,
                threshold: 10,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                breakpoints: {
                    576: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 24
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 24
                    },
                    1200: {
                        slidesPerView: 7,
                        spaceBetween: 24
                    }
                }
            });
        }

      

        new Swiper(containerMain, sliderOptions);
    }
}
