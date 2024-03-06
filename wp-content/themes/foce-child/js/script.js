

document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 768) {
        let banner = document.querySelector(".banner");
        // Eliminar el video en dispositivos móviles
        let videoElement = document.querySelector(".video");
        videoElement.parentNode.removeChild(videoElement);
                //let loadingImage = banner.querySelector(".loading-image");

        // Cargar la imagen de placeholder
        let placeholderImage = document.createElement('img');
        placeholderImage.src = '/projet-koukaki/wp-content/themes/foce-child/img/screenshot.png';
        banner.appendChild(placeholderImage);
    }
});