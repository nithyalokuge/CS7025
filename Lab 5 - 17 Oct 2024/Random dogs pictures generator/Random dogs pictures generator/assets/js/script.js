document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.getElementById("dog-image");
    const button = document.getElementById("change-bg");
    let images = [];

    // Fetch the JSON file with the image data
    fetch("assets/js/images.json")
        .then(response => response.json())
        .then(data => {
            images = data;
        })
        .catch(error => console.error("Error loading images: ", error));

    // Set up the button to display a random image
    button.addEventListener("click", () => {
        if (images.length > 0) {
            // Get a random image
            const randomIndex = Math.floor(Math.random() * images.length);
            const { path, description } = images[randomIndex];

            // Update the image element with the random image
            imageElement.src = path;
            imageElement.alt = description;
        }
    });
});

