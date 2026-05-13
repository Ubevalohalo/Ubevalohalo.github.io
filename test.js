// CREATE NAV
function createNav() {

    const navHTML = `
        <nav>

            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <div class="nav-links">
                <ul id="navList">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>

        </nav>
    `;

    document.getElementById("navContainer").innerHTML = navHTML;
}


// HAMBURGER FUNCTIONALITY
function setupHamburger() {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // close on click
    document.querySelectorAll("#navList a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}


// INIT
window.onload = function () {
    createNav();
    setupHamburger();
};