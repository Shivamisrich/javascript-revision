function handleCostkeydown(event) {
    if (event.key === 'Enter') {
        calculate();
    }
}
function calculate() {

let cost =Number(document.querySelector('.js-input-button').value); // input box ke andar ka value ko process kiye
if (cost >= 50) { // compare kiye 
    document.querySelector('.js-output').innerHTML  = cost;  //now paragraph me update kar diye output
}
else if (cost <= 50 ) {
    document.querySelector('.js-output').innerHTML  = cost + 10;
}
document.querySelector('.js-output').innerHTML = cost.toFixed(2);
} 