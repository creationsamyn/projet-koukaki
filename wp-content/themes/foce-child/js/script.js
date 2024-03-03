document.addEventListener("DOMContentLoaded", function() {
    // Verificar si es un dispositivo móvil (ancho de pantalla <= 768px)
    if (window.innerWidth <= 768) {
        let banner = document.querySelector(".banner");

        // Crear un elemento de video
        let videoElement = document.createElement("video");
        videoElement.setAttribute("width", "100%"); // Usar el ancho completo del contenedor
        videoElement.setAttribute("autoplay", ""); // Video se reproduce automáticamente
        videoElement.setAttribute("loop", ""); // Video se reproduce en bucle

        // Crear un elemento de origen (source) 
       let sourceElement = document.createElement("source");
        sourceElement.setAttribute("src", "https://assets.codepen.io/6093409/river.mp4");
        sourceElement.setAttribute("type", "video/mp4");

        // Agregar el elemento de origen al elemento de video
        videoElement.appendChild(sourceElement);

        // Agregar el elemento de video al contenedor
        banner.appendChild(videoElement);
    }
});
