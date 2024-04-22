// Function for logout
function logout() {
    // Redirect to the login page
    window.location.href = '../login/login.html';
}

// Event listener for logout link
document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();
    logout();
});    