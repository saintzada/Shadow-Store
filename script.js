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
                img.style.opacity = "1"; // Torna a imagem visível
            } else {
                img.style.opacity = "0"; // Torna a imagem invisível
            }
        });
    }

    function nextImage() {
        const previousIndex = currentIndex;
        currentIndex = (currentIndex + 1) % bannerImages.length;
        showImage(currentIndex);
        setTimeout(() => {
            bannerImages[previousIndex].style.transition = "opacity 0.5s";
            bannerImages[previousIndex].style.opacity = "0";
            setTimeout(() => {
                bannerImages[previousIndex].style.transition = "";
            }, 500); // Remover a transição após 0.5 segundos
        }, 0); // Adiar a transição da imagem anterior em 0 segundos
    }

    // Adicionar evento de mouseover para as imagens do slide
    bannerImages.forEach((img, i) => {
        img.addEventListener("mouseover", () => {
            img.style.opacity = "1"; // Torna a imagem visível ao passar o mouse
        });

        img.addEventListener("mouseout", () => {
            if (i !== currentIndex) {
                img.style.opacity = "0"; // Torna a imagem invisível quando o mouse sai, exceto se for a imagem atual
            }
        });
    });

    // Iniciar a rotação automática
    setInterval(nextImage, 3000); // Mude de imagem a cada 3 segundos (3000 milissegundos)
});
