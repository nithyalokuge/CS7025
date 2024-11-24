// SCRIPT FOR DARK MODE

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const modeIcon = document.getElementById("mode-icon");

    const linkedinIcon = document.querySelector(".linkedin-icon");
    const githubIcon = document.querySelector(".github-icon");

    // Function to change the src of icons
    const updateIcons = (isDarkMode) => {
        if (linkedinIcon) {
            linkedinIcon.src = isDarkMode
                ? "assets/img/linkedin_light.png"
                : "assets/img/linkedin.png";
        }
        if (githubIcon) {
            githubIcon.src = isDarkMode
                ? "assets/img/github_light.png"
                : "assets/img/github.png";
        }
    };

    // Check if the user has a saved theme preference in localStorage
    const isDarkMode = localStorage.getItem("theme") === "dark";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        modeIcon.src = "assets/img/sun.png";
        modeIcon.alt = "Sun icon for light mode";
    } else {
        document.body.classList.remove("dark-mode");
        modeIcon.src = "assets/img/moon.png";
        modeIcon.alt = "Moon icon for dark mode";
    }

    // Update icons for the current mode
    updateIcons(isDarkMode);

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener("click", () => {
        const isDarkModeActive = document.body.classList.toggle("dark-mode");

        if (isDarkModeActive) {
            modeIcon.src = "assets/img/sun.png";
            modeIcon.alt = "Sun icon for light mode";
            localStorage.setItem("theme", "dark");
        } else {
            modeIcon.src = "assets/img/moon.png";
            modeIcon.alt = "Moon icon for dark mode";
            localStorage.setItem("theme", "light");
        }

        // Update icons for the toggled mode
        updateIcons(isDarkModeActive);
    });
});
