// JavaScript (script.js)
function showBuyButton(product) {
    const buyButton = product.querySelector('.buy-button');
    buyButton.style.opacity = '1';
}

function hideBuyButton(product) {
    const buyButton = product.querySelector('.buy-button');
    buyButton.style.opacity = '0';
}
