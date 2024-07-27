document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll('.panel .price');
    panels.forEach(priceElement => {
        const randomPrice = (Math.random() * 999).toFixed(0); // Generates a random price between 0 and 100
        priceElement.textContent = `£${randomPrice}`;
    });
});