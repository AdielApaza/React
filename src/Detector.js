document.addEventListener("DOMContentLoaded", function() {
    var elemento = document.querySelector('.status');
    if (elemento.textContent.includes('Dead')) {
        elemento.classList.add('destacado');
    }
});