let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // L'utilisateur fait défiler vers le bas
        header.style.transform = 'translateY(-100%)';
    } else {
        // L'utilisateur fait défiler vers le haut
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});