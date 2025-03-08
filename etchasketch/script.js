document.getElementById("selectorButton").addEventListener("click", function () {
    let size = document.getElementById("gridSize").value || 16; // Default 16x16
    createGrid(size);
});

function createGrid(size) {
    const grid = document.getElementById("grid");
    grid.innerHTML = ""; // Clear existing grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 1; i <= size * size; i++) {
        let cell = document.createElement("div");
        cell.id = i; // Assign unique ID (1-2-3...)

        // Hover effect for random color
        cell.addEventListener("mouseenter", function () {
            if (this.style.backgroundColor !== "white" && this.style.backgroundColor !== "") {
                this.style.backgroundColor = "white"; // Change back to white if already colored
            } else {
                this.style.backgroundColor = getRandomColor(); // Assign a new random color
            }
        });

        grid.appendChild(cell);
    }
}

// Function to generate a random color
function getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}
