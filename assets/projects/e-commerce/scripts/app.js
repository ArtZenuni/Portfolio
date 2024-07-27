const products = [
    { id: 1, name: 'Cheap Camera', price: 125, image: './images/product1.png' },
    { id: 2, name: 'Mid Range Camera', price: 250, image: './images/product2.jpg' },
    { id: 3, name: 'Pricey Camera', price: 575, image: './images/product3.jpg' },
    { id: 4, name: 'Priciest Camera', price: 1300, image: './images/product4.jpg'}
];

const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCart();
});

function loadProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    loadCart();
}

function loadCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
    updateTotal();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    loadCart();
}

function updateTotal() {
    const totalPriceElement = document.getElementById('total-price');
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    totalPriceElement.textContent = total.toFixed(2);
}