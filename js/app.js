(function(){
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');
    const icon = menu.querySelector('i');
    const menuLinks = document.querySelectorAll('.menu__link');

    menu.addEventListener('click', () => {
        list.classList.toggle('menu__links--show');

        if (list.classList.contains('menu__links--show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); 
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            list.classList.remove('menu__links--show'); 
            icon.classList.remove('fa-times'); 
            icon.classList.add('fa-bars'); 

            const sectionId = link.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
})();
