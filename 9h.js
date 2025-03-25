// Get our input box and paragraph
let inputBox = document.querySelector('.js-input-button');
let textDisplay = document.querySelector('p');

// When you type something in the input box
inputBox.onkeyup = function() {
    // Show what you typed in the paragraph below
    textDisplay.innerHTML = inputBox.value;
}