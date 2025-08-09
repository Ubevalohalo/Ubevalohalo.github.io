// Wait for the entire page to load before running the script
document.addEventListener("DOMContentLoaded", () => {

    // A generic function for the typewriter effect
    function typeWriterEffect(element, callback) {
        if (!element) {
            if (callback) callback();
            return;
        }

        const textToType = element.textContent;
        element.textContent = "";
        element.style.visibility = 'visible';

        let i = 0;
        const speed = 100; /* The speed/duration of the effect in milliseconds */

        function type() {
            if (i < textToType.length) {
                element.textContent += textToType.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.style.borderRight = 'none';
                if (callback) {
                    callback();
                }
            }
        }
        type();
    }

    // Function to automatically scroll to the top of the page.
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // --- Page-specific logic ---
    const h1Element = document.querySelector(".main-title");
    const h3Element = document.querySelector(".subtitle");
    const h2Element = document.querySelector("#titleSection h2");
    const projectsH3Element = document.querySelector("#titleSection h3");

    // Check which page we are on
    if (h1Element && h3Element) {
        // This is the about.html page, start automatically
        typeWriterEffect(h1Element, () => {
            setTimeout(() => {
                typeWriterEffect(h3Element);
            }, 500); 
        });
    } else if (h2Element && projectsH3Element) {
        // This is the projects.html page, start automatically
        typeWriterEffect(h2Element, () => {
            setTimeout(() => {
                typeWriterEffect(projectsH3Element);
            }, 500); 
        });
    }

    // Call the scroll function automatically when the page loads.
    scrollToTop();
});
