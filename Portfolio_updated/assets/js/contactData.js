// SCRIPT FOR SAVING/RETRIEVING FORM DATA IN/FROM LOCAL STORAGE

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nameField = document.getElementById("name");
    const surnameField = document.getElementById("surname");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    // Save form data as the user types
    form.addEventListener("input", function() {
        const nameValue = nameField.value;
        const surnameValue = surnameField.value;
        const emailValue = emailField.value;
        const messageValue = messageField.value;
        
        // Check if values are being updated
        console.log(nameValue, surnameValue, emailValue, messageValue); 
        
        localStorage.setItem("name", nameValue);
        localStorage.setItem("surname", surnameValue);
        localStorage.setItem("email", emailValue);
        localStorage.setItem("message", messageValue);
    });

    // Remove message from localStorage when form is submitted
    form.addEventListener("submit", function() {
        localStorage.removeItem("message");
    });

    // Pre-fill form fields with data saved in localStorage
    if (localStorage.getItem("name")) {
        nameField.value = localStorage.getItem("name");
    }
    if (localStorage.getItem("surname")) {
        surnameField.value = localStorage.getItem("surname");
    }
    if (localStorage.getItem("email")) {
        emailField.value = localStorage.getItem("email");
    }
});