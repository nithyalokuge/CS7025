// SCRIPT FOR SENDING FORM DATA TO MY EMAIL USING EMAILJS (https://www.emailjs.com/) 

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("button");
    const notification = document.getElementById("notification");

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        btn.innerHTML = "Sending...";  
        btn.disabled = true;  
  
        const serviceID = ""; //Insert ID here
        const templateID = ""; //Insert ID here
  
        emailjs.sendForm(serviceID, templateID, this).then(
            () => {
                // Reset button text after success
                btn.innerHTML = "Send message";  
                btn.disabled = false;  
                notification.textContent = "Message sent successfully!";
                notification.classList.add("show");
  
                // Hide the notification after 3 seconds
                setTimeout(() => {
                    notification.classList.remove("show");
                }, 3000);
            },
            (err) => {
                // Log the error to the console for debugging
                console.error("EmailJS Error: ", err);  
                // Reset button text after error
                btn.innerHTML = "Send message";  
                btn.disabled = false;  
                notification.textContent = "Failed to send message! Please, retry.";
                notification.classList.add("show");
  
                // Hide the notification after 3 seconds
                setTimeout(() => {
                    notification.classList.remove("show");
                }, 3000);
            }
        );
    });

});
  
