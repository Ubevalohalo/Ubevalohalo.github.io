/*NOTES:
- switch css elements, light mode and dark mode
*/
//automate the nav
function createNavBar() {
            const navBarHTML = `
                <nav>
                    <div id="viewModes">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="hamburger-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <div id="pages" class="nav-links">
                        <ul id="navList">
                            <li><a href="index.html">Start</a></li>
                            <li><a href="about.html" id='aboutPage'>About</a></li>
                            <li><a href="projects.html" id='projectsPage'>Projects</a></li>
                        </ul>
                    </div>
                    <div id="icons">
                        <a href="mailto:isabellaepena04@Gmail.com">
                            <img src="emailIconDarkMode.png">
                        </a>
                        <a href="http://www.linkedin.com/in/isabellaepena" target="_blank">
                            <img src="linkedInIconDarkMode.png">
                        </a>
                        <a href="resume.html">
                            <img src="resumeIconDarkMode.png">
                        </a>
                    </div>
                </nav>
            `;
    document.body.insertAdjacentHTML('afterbegin', navBarHTML);
};
//automate the footer
function createFooter() {
            const footerHTML = `
                <footer>
                    <h2>Let's Connect!</h2>
                    <div id="connections">
                        <div id="email">
                            <a href="mailto:isabellaepena04@Gmail.com">
                                <img src="emailIconDarkMode.png">
                                <h3>Email</h3>
                            </a>
                        </div>
                        <div id="linkedIn">
                            <a href="http://www.linkedin.com/in/isabellaepena" target="_blank">
                                <img src="linkedInIconDarkMode.png">
                                <h3>LinkedIn</h3>
                                </a>
                        </div>
                        <div id="resume">
                            <a href="resume.html">
                                <img src="resumeIconDarkMode.png">
                                <h3>View Resume</h3>
                            </a>
                        </div>
                    </div>
                </footer>
            `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
};

//underline nav item page that user is currently on
function underlineCurrentPage (){
    if ( window.location.href.includes('about.html') ) {
        document.getElementById('aboutPage').style.textDecoration = "underline";
        document.getElementById('aboutPage').style.fontWeight = "bold";
    }
    else if ( window.location.href.includes('projects.html') ) {
        document.getElementById('projectsPage').style.textDecoration = "underline";
        document.getElementById('projectsPage').style.fontWeight = "bold";
    }
    else {
        return
    };
}

//fadeIn and out on scroll
function setupScrollAnimation() {
  const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");
  if (elementsToFadeInUpOnScroll.length > 0) {
    window.addEventListener("scroll", function(event) {
      elementsToFadeInUpOnScroll.forEach(function(element) {
        // Check if the element is in the viewport
        const rect = element.getBoundingClientRect();
        const isElementVisible = (rect.top <= window.innerHeight) && (rect.bottom >= 0);

        if (isElementVisible) {
          element.classList.add("fade-in-up");
        } else {
          // If the element is not visible, remove the class to fade it out
          element.classList.remove("fade-in-up");
        }
      });
    });
  }
}
//--------------------------------------------------------------------------------------
//typewriter effect
function typeWriter(element, text, speed, callback) {
    let i = 0;
    
    // Set initial visibility to visible
    element.style.visibility = 'visible';

    function typeChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        } else {
            // When typing is complete, remove the cursor and call the optional callback
            element.style.borderRight = 'none';
            if (callback) {
                callback();
            }
        }
    }
    typeChar();
}

// Function to start the first typewriter effect on the h1 element
function startFirstTypewriterEffect() {
    const element = document.querySelector('.main-title-typewriter');
    const originalText = element.textContent.trim();
    element.textContent = ''; // Clear text content for typing
    typeWriter(element, originalText, 100, startSecondTypewriterEffect);
}

// Function to start the second typewriter effect on the h3 element
function startSecondTypewriterEffect() {
    const element = document.querySelector('.subtitle-typewriter');
    const originalText = element.textContent.trim();
    element.textContent = ''; // Clear text content for typing
    typeWriter(element, originalText, 100, null);
}









// The main function that runs when the page is fully loaded
window.onload = function() {
    createNavBar();
    createFooter();
    underlineCurrentPage();
    setupScrollAnimation();
    startFirstTypewriterEffect()
    // Call the first typewriter function after a 2 sec delay
}