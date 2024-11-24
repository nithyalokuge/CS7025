// SAVE FORM DATA TO LOCAL STORAGE

const form = document.getElementById("contact-form");

// Save form data as the user types
form.addEventListener("input", function() {
    const nameValue = document.getElementById("name").value;
    const surnameValue = document.getElementById("surname").value;
    const emailValue = document.getElementById("email").value;
    const messageValue = document.getElementById("message").value;
    
    // Check if values are being updated
    console.log(nameValue, surnameValue, emailValue, messageValue); 
    
    localStorage.setItem("name", nameValue);
    localStorage.setItem("surname", surnameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("message", messageValue);
});

// Function to load form data from localStorage
window.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("name")) {
        document.getElementById("name").value = localStorage.getItem("name");
    }
    if (localStorage.getItem("surname")) {
        document.getElementById("surname").value = localStorage.getItem("surname");
    }
    if (localStorage.getItem("email")) {
        document.getElementById("email").value = localStorage.getItem("email");
    }
    if (localStorage.getItem("message")) {
        document.getElementById("message").value = localStorage.getItem("message");
    }
});

// Clear localStorage when form is submitted
form.addEventListener("submit", function() {
    localStorage.removeItem("message");
});
       