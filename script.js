// script.js

// ===================
// FORM VALIDATION
// ===================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Custom validation rules
  if (username.length < 3) {
    message = "Username must be at least 3 characters long.";
  } else if (!email.includes("@") || !email.includes(".")) {
    message = "Please enter a valid email.";
  } else if (password.length < 6) {
    message = "Password must be at least 6 characters long.";
  } else {
    message = "Form submitted successfully!";
  }

  document.getElementById("formMessage").innerText = message;
});

// ===================
// CLICK COUNTER FEATURE
// ===================
let count = 0;
document.getElementById("clickBtn").addEventListener("click", function() {
  count++;
  document.getElementById("clickCount").innerText = count;
});

// ===================
// LIVE INPUT PREVIEW
// ===================
document.getElementById("liveInput").addEventListener("input", function() {
  let text = document.getElementById("liveInput").value;
  document.getElementById("livePreview").innerText = text;
});
