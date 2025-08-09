// Wait for the entire page to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // A generic function for the typewriter effect
    function typeWriterEffect(element, callback) {
        // If the element doesn't exist, we just stop.
        if (!element) {
            if (callback) callback();
            return;
        }

        // Store the original text and clear the element's content
        const textToType = element.textContent;
        element.textContent = "";

        // Make the element visible but with no text.
        element.style.visibility = 'visible';

        let i = 0;
        const speed = 150; /* The speed/duration of the effect in milliseconds */

        // This is the recursive function that types out one character at a time.
        function type() {
            if (i < textToType.length) {
                element.textContent += textToType.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // When the typing is finished, hide the cursor.
                element.style.borderRight = 'none';
                if (callback) {
                    // Call the next function in the sequence if it exists.
                    callback();
                }
            }
        }
        type();
    }

    // --- Page-specific logic ---

    // Look for elements on the index.html page
    const h1Element = document.querySelector(".main-title");
    const h3Element = document.querySelector(".subtitle");
    
    // Look for elements on the projects.html page
    const h2Element = document.querySelector("#titleSection h2");
    const projectsH3Element = document.querySelector("#titleSection h3");

    // Check which page we are on and start the appropriate animation sequence
    if (h1Element && h3Element) {
        // This is the index.html page
        typeWriterEffect(h1Element, () => {
            // After h1 is done, start typing h3 after a short delay
            setTimeout(() => {
                typeWriterEffect(h3Element);
            }, 500); 
        });
    } else if (h2Element && projectsH3Element) {
        // This is the projects.html page
        typeWriterEffect(h2Element, () => {
            // After h2 is done, start typing h3 after a short delay
            setTimeout(() => {
                typeWriterEffect(projectsH3Element);
            }, 500); 
        });
    }
});
