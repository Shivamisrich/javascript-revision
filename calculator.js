let calculate = '';
function updateCalculation(value) {
    
    calculate = calculate+value;
    document.querySelector('.calculation-display').innerHTML = calculate;
}
function clearCalculation() {
     calculate = '';
     document.querySelector('.calculation-display').innerHTML = calculate;
    

}