/*NOTES:
- I want to make a function that underlines the page user is currently on for the nav
- I also want to make a function to have the page top headers type out with a typewriter effect
- generate the same footer for each page, same for nav
- switch css elements, light mode and dark mode
*/
// ---code for hamburger menu ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        // Close the menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
});