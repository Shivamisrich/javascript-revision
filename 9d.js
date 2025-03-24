function display() {
    const name = document.querySelector(".js-input").value;
    document.querySelector(".js-paragraph").innerHTML = `Your name is: ${name}`;
}

// Listen for Enter key press
document.querySelector(".js-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if Enter is pressed
        display(); // Call the display function
    }
});