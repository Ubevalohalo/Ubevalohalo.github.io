// CREATE NAVBAR
function createNavBar() {

    const navBarHTML = `
        <nav>

            <div class="hamburger-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <div id="pages" class="nav-links">
                <ul id="navList">
                    <li><a href="index.html">Start</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="projects.html">Projects</a></li>
                </ul>
            </div>

            <div id="icons">
                <a href="mailto:isabellaepena04@gmail.com">
                    <img src="emailIconDarkMode.png" alt="Email Icon">
                </a>

                <a href="https://www.linkedin.com" target="_blank">
                    <img src="linkedInIconDarkMode.png" alt="LinkedIn Icon">
                </a>

                <a href="resume.html">
                    <img src="resumeIconDarkMode.png" alt="Resume Icon">
                </a>
            </div>

        </nav>
    `;

    // INSERT NAVBAR INTO SPECIFIC CONTAINER
    document
        .getElementById("navContainer")
        .insertAdjacentHTML("beforeend", navBarHTML);
}



/* =========================
   HAMBURGER FUNCTIONALITY
========================= */

function setupHamburgerMenu() {

    const hamburger = document.querySelector(".hamburger-menu");

    const navLinks = document.querySelector(".nav-links");

    const navItems = document.querySelectorAll("#navList a");


    // OPEN/CLOSE MENU
    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navLinks.classList.toggle("active");

    });


    // CLOSE MENU WHEN LINK CLICKED
    navItems.forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");

            navLinks.classList.remove("active");

        });

    });

}



/* =========================
   PAGE LOAD
========================= */

window.onload = function() {

    createNavBar();

    setupHamburgerMenu();

}