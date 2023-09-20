// JavaScript (script.js)
const products = document.querySelectorAll('.product');

products.forEach((product) => {
    product.addEventListener('mouseover', () => {
        const buyButton = product.querySelector('.buy-button');
        buyButton.style.opacity = '1';
    });

    product.addEventListener('mouseout', () => {
        const buyButton = product.querySelector('.buy-button');
        buyButton.style.opacity = '0';
    });
});
