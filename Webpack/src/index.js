document.addEventListener('DOMContentLoaded', function () {
    const htmlContainer = document.getElementById('htmlContainer');

    if (htmlContainer) {
        fetch('index.html')
            .then(response => response.text())
            .then(htmlContent => {
                htmlContainer.innerHTML = htmlContent;
                const sum = () => {
                    result.innerHTML = 2
                }
                sum()
            })
            .catch(error => console.error('Error al cargar el HTML:', error));
    } else {
        console.error('El elemento con ID "htmlContainer" no se encontró en el documento.');
    }
});
