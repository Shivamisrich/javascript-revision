// function removeEggs(foods) {
//     let newArray = [];
//     for (let i = 0; i < foods.length; i++) {
//         foods[i];
//         if (foods[i]!='eggs') {
//             newArray.push(foods[i]);
//         }
        
//     }
//     return newArray;
// }
// console.log(removeEggs(['eggs','burger','hams']));


function removeEggs(foods) {
    let count = 0;
    let newArray = [];
    for (let i = 0; i < foods.length; i++) {
       if(foods[i]==='eggs'){ 
        count++;
        
       }
    }
    return newArray;
}
console.log(removeEggs(['eggs','burger','hams']));


