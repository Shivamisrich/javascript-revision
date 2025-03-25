let calculation = '';

function updateCalculation(value) {
    calculation = calculation + value;
   document.querySelector('.calculation-display').innerHTML = calculation;
    
}
function clearCalculation() {
    calculation = '';
    document.querySelector('.calculation-display').innerHTML = calculation;
}
