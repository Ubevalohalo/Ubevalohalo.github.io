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