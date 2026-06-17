// ==========================
// LOGIN FUNCTIONALITY
// ==========================

// Get elements
const loginForm = document.getElementById("login-form");
const username = document.getElementById("uname");
const password = document.getElementById("pwd");
const modal = document.querySelector(".modal");

// Hide modal when page loads
modal.style.display = "none";

// Valid credentials
const validUsername = "admin";
const validPassword = "12345";

// Form submit event
loginForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    validateLogin();

});

// Validate login
function validateLogin() {

    const enteredUsername = username.value.trim();
    const enteredPassword = password.value.trim();

    if (
        enteredUsername === validUsername &&
        enteredPassword === validPassword
    ) {

        // Successful login
        window.location.href = "index.html";

    } else {

        // Show error modal
        modal.style.display = "flex";
    }
}


// ==========================
// MODAL FUNCTIONALITY
// ==========================

// Hide modal
function dismissModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {

    if (event.target === modal) {
        dismissModal();
    }

});


// ==========================
// SIDEBAR TOGGLE
// ==========================

// Only runs if sidebar exists
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-btn");
const links = document.querySelectorAll(".sidebar a");

if (sidebar && toggleBtn) {

    let isOpen = false;

    toggleBtn.addEventListener("click", function() {

        isOpen = !isOpen;

        if (isOpen) {

            sidebar.style.width = "272px";

            toggleBtn.style.transform = "rotate(90deg)";

            links.forEach(link => {
                link.style.opacity = "1";
            });

        } else {

            sidebar.style.width = "50px";

            toggleBtn.style.transform = "rotate(0deg)";

            links.forEach(link => {
                link.style.opacity = "0";
            });
        }

    });

};