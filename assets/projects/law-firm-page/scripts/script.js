document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Remove any existing alert message
    const existingAlert = document.querySelector('.alert-message');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create a new alert message element
    const alertMessage = document.createElement('div');
    alertMessage.className = 'alert-message';
    alertMessage.textContent = 'Thank you for your message. We will get back to you soon!';
    
    // Style the alert message (optional, can also be done in CSS)
    alertMessage.style.color = 'green';
    alertMessage.style.marginTop = '10px';

    // Insert the alert message after the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(alertMessage, form.nextSibling);

    // Reset the form fields
    this.reset();
});

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active'); // Toggle the active class for animation
});
