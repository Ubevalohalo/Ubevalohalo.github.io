/*NOTES:
- I also want to make a function to have the page top headers type out with a typewriter effect
- switch css elements, light mode and dark mode
- have each section of the pages fade in and out as the user scrolls
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
    if ( document.URL.includes('about.html') ) {
        document.getElementById('aboutPage').style.textDecoration = "underline";
        document.getElementById('aboutPage').style.fontWeight = "bold";
    }
    else if ( document.URL.includes('projects.html') ) {
        document.getElementById('projectsPage').style.textDecoration = "underline";
        document.getElementById('projectsPage').style.fontWeight = "bold";
    }
    else {
        return
    };
}
window.onload = function() {
    createNavBar();
    createFooter();
    underlineCurrentPage();
}