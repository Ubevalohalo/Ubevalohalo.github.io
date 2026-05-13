// CREATE NAVBAR
function createNavBar() {

    const navContainer = document.getElementById("navContainer");

    navContainer.innerHTML = `
        <nav>

            <div class="hamburger-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <div class="nav-links">
                <ul id="navList">
                    <li><a href="index.html">Start</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="projects.html">Projects</a></li>
                </ul>
            </div>

        </nav>
    `;
}


// HAMBURGER MENU
function setupHamburgerMenu() {

    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll("#navList a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}


// INIT
window.onload = function () {
    createNavBar();
    setupHamburgerMenu();
};