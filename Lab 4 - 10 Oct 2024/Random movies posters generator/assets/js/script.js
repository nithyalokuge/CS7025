let moviePosters = [
    "assets/img/img1.jpg", "assets/img/img2.jpg", "assets/img/img3.jpg", "assets/img/img4.jpeg",
    "assets/img/img5.jpeg", "assets/img/img6.jpg", "assets/img/img7.jpg", "assets/img/img8.jpg", 
    "assets/img/img9.avif", "assets/img/img10.png", "assets/img/img11.png"
];

document.addEventListener("DOMContentLoaded", (event) => {
    let randomMovieButton = document.getElementById("generate-image");
    randomMovieButton.addEventListener("click", (event) => {
        console.log("clicked");
        let moviePosterImage = document.getElementById("movie-poster-image");
        let randomMovieIndex = getRandomMovie(moviePosters.length);
        moviePosterImage.setAttribute("src", moviePosters[randomMovieIndex]);
    });
});

function getRandomMovie(max) {
    return Math.floor(Math.random() * max);
}