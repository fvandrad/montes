const burgerMenu = document.querySelector('.burger-menu');
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('.nav-links li');

        function toggleMenu() {
            nav.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        }

        burgerMenu.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });