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

document.addEventListener("DOMContentLoaded", function () {
    const bannerImages = document.querySelectorAll(".banner-img");
    let currentIndex = 0;

    function showImage(index) {
        bannerImages.forEach((img, i) => {
            if (i === index) {
                img.classList.add("active");
            } else {
                img.classList.remove("active");
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % bannerImages.length;
        showImage(currentIndex);
    }

    // Iniciar a rotação automática
    setInterval(nextImage, 3000); // Mude de imagem a cada 3 segundos (3000 milissegundos)
});
