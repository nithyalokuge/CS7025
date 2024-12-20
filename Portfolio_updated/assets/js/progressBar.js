// SCRIPT FOR PROGRESS BAR

function progress(progressId, textId, value) {
    const progressBar = document.getElementById(progressId);
    const progressText = document.getElementById(textId);

    // Percentage value between 0 and 100
    const percentage = Math.max(0, Math.min(value, 100));

    // Width of the progress fill
    progressBar.querySelector(".progress-fill").style.width = `${percentage}%`;

    // Set the text display to show percentage
    progressText.textContent = `${percentage}%`;
}

document.addEventListener("DOMContentLoaded", function() {
    // Set different progress for each project
    if (document.getElementById("progress-bar-1")) {
        progress("progress-bar-1", "progress-text-1", 99); 
    }
    if (document.getElementById("progress-bar-2")) {
        progress("progress-bar-2", "progress-text-2", 99); 
    }
    if (document.getElementById('progress-bar-3')) {
        progress("progress-bar-3", "progress-text-3", 1); 
    }
});
