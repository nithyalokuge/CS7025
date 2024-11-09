// Function to create a cookie and store it for a day
function setCookie(cookieKey, cookieValue, exdays) {
    const cookieDate = new Date();
    const expiryDaysInMs = exdays * 24 * 60 * 60 * 1000;
    cookieDate.setTime(cookieDate.getTime() + expiryDaysInMs);
    let expires = "expires=" + cookieDate.toUTCString();
    document.cookie = cookieKey + "=" + cookieValue + ";" + expires + ";path=/";
}
  
// Function to get the cookie value
function getCookie(cookieKey) {
    let name = cookieKey + "=";
    let myCookie = document.cookie.split(';');
    for (let i = 0; i < myCookie.length; i++) {
        let theCookie = myCookie[i];
        while (theCookie.charAt(0) == ' ') {
            theCookie = theCookie.substring(1);
        }
        if (theCookie.indexOf(name) == 0) {
            return theCookie.substring(name.length, theCookie.length);
        }
    }
    return "";
}
  
// Expires in 1 day
setCookie("button", "clicked", 1); 
  
// Function to update the click count in localStorage and on the page
function updateClickCount() {
    let clickCount = localStorage.getItem("clickCount");
    if (!clickCount) {
        clickCount = 0;
    }
    clickCount = parseInt(clickCount) + 1;
    localStorage.setItem("clickCount", clickCount);
    document.getElementById("clickCountDisplay").textContent = `Button clicked ${clickCount} times.`;
}
  
// Display initial click count on page load
window.onload = function() {
    let clickCount = localStorage.getItem("clickCount");
    if (!clickCount) {
        clickCount = 0;
    }
    document.getElementById("clickCountDisplay").textContent = `Button clicked ${clickCount} times.`;
}