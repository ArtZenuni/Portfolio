document.getElementById('subscribeButton').addEventListener('click', function(event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[name="email"]');
    const messageDiv = document.getElementById('message');

    if (emailInput.checkValidity()) {
        // Example action: showing a message
        messageDiv.textContent = 'Thank you for subscribing!';
        messageDiv.style.color = 'white';
        messageDiv.style.fontWeight = 'bolder'
    } else {
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.style.color = 'red';
    }
});
