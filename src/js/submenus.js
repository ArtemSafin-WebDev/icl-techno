export default function() {
    const submenuLinks = Array.from(document.querySelectorAll('.js-submenu-link'));

    console.log('Submenus');

    for (let link of submenuLinks) {
        const submenu = link.parentElement.querySelector('.js-submenu-content');
        

        if (!submenu) {
            console.warn('Submenu content not found');
            continue;
        }

        link.addEventListener('click', function(event) {
            event.preventDefault();
          
            submenu.classList.toggle('shown');
            link.classList.toggle('active');
        });
    }
}
