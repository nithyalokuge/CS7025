// SCRIPT FOR DARK MODE OR LIGHT MODE

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const modeIcon = document.getElementById("mode-icon");

    // Check if the user has a saved theme preference in localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");  
        // Sun icon for light mode
        modeIcon.src = "assets/img/sun.png";  
        modeIcon.alt = "Sun icon for light mode";
    } else {
        document.body.classList.remove("dark-mode");  
        // Moon icon for dark mode
        modeIcon.src = "assets/img/moon.png";  
        modeIcon.alt = "Moon icon for dark mode";
    }

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener("click", () => {
        // Toggle dark mode class on body
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            modeIcon.src = "assets/img/sun.png";
            modeIcon.alt = "Sun icon for light mode";

            // Save the dark mode preference in localStorage
            localStorage.setItem("theme", "dark");
        } else {
            modeIcon.src = "assets/img/moon.png";
            modeIcon.alt = "Moon icon for dark mode";

            // Save the light mode preference in localStorage
            localStorage.setItem("theme", "light");
        }
    });
});




