// SEND FORM DATA TO MY EMAIL USING EMAILJS (https://www.emailjs.com/) 

const btn = document.getElementById("button");
const notification = document.getElementById("notification");

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_d6wnjtj";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send email";
      notification.textContent = "Email sent successfully!";
      notification.classList.add("show");

      // Hide the notification after 3 seconds
      setTimeout(() => {
        notification.classList.remove("show");
      }, 3000);
    },
    (err) => {
      btn.value = "Send email";
      notification.textContent = "Failed to send email!";
      notification.classList.add("show");

      // Hide the notification after 3 seconds
      setTimeout(() => {
        notification.classList.remove("show");
      }, 3000);
    }
  );
});