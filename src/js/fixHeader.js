import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


export default function() {
    const header = document.querySelector('.js-page-header');

    if (!header) return;

    let headerStart = header.offsetTop;

    function fixHeader() {
        const scrollTop = window.pageYOffset;

        if (scrollTop > headerStart) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }

    window.addEventListener('scroll', fixHeader);

   
    const burgerBtn = document.querySelector('.js-burger-btn');
    const burgerMenuScrollContainer = document.querySelector('.js-burger-menu')

    if (!burgerBtn) return;

    let burgerMenuOpen = false;

    burgerBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (burgerMenuOpen) {
            document.documentElement.classList.remove('burger-menu-shown');
            clearAllBodyScrollLocks()
            burgerMenuOpen = false;
            if (window.pageYOffset <= headerStart) {
                header.classList.remove('fixed');
            }
        } else {
            document.documentElement.classList.add('burger-menu-shown');
            header.classList.add('fixed');
            disableBodyScroll(burgerMenuScrollContainer);
            burgerMenuOpen = true;
        }
    });


    if (matchMedia) {
        const mq = window.matchMedia(`(max-width: 1080px)`);
        mq.addListener(widthChange);
        widthChange(mq);
    }

    function widthChange(mq) {
        if (!mq.matches) {
            clearAllBodyScrollLocks();
        } 
    }
}
