 const inputBox = document.querySelector('.js-input-button');
 const displayText = document.querySelector('.js-display-text');
 //the above 2 lines are getting the input box and the display text
 //now explain the below line from basic level

 inputBox.onkeydown = function(event) {
    displayText.innerHTML = event.key;
 }