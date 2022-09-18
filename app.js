const container = document.getElementById('container');

// Clear grid
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
}


// Create grid of divs and
// Add event listener to EACH pixel class element
function createGrid() {
    clearGrid()
    const gridNum = document.getElementById('gridInput').value
    container.setAttribute('style', `grid-template-columns: repeat(${gridNum}, 2fr); grid-template-rows: repeat(${gridNum}, 2fr);`);
    for (let i = 0; i < (gridNum*gridNum); i++) {
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.addEventListener('pointerover', event => {
            event.target.style.background = 'white';
        })
        container.appendChild(pixel);
    }
}

createGrid()