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


// function removeEggs(foods) {
//     let count = 0;
//     let newArray = [];
//     for (let i = 0; i < foods.length; i++) {
//        if(foods[i]==='eggs'){ 
//         count++;
        
//        }

//     }
//     return newArray;
// }
// console.log(removeEggs(['eggs','burger','hams']));
// function removeEggs(params) {
    
// }

function removeEggs(foods) {
    foods.reverse();
    let newarray  = [];
    let count = 0;
   for (let i = 0; i < foods.length; i++) {
    if (count < 2 && foods[i]==='eggs') {
        count++; 
        continue;           //

    }
    else{
        newarray.push(foods[i]);
    }
    
   }
   return newarray.reverse();
}
console.log(removeEggs(['eggs','hams','burger','eggs','eggs']));

