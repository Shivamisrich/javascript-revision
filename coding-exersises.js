// 1. swap array
/*
function arraySwap(array){
    let temp = ''; // temporary variable bana diye hai.
   temp  = array[0]; // this assign the value of 1st element of the array to the temp.
   array[0] = array[array.length-1];// this assign the value of last element to the 1st place.
   array[array.length-1] = temp; // this assign the value of temp to the last place.

    return array;
}
console.log(arraySwap([1, 2 , 3 , 4]));
*/


// 2. loop for and while 
/*
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
    
}
let i = 0;
while (i <=10) {
    i+=2;
    console.log(i);
}

*/
// let i = 6;
// while (i>0) {
//     i = i-1;
//     console.log(i);
// }
// function increaseByOne(array) {
//     const newArray = []; // Declare inside the function
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] + 1); // Directly push incremented value
//     }
//     return newArray; // Return instead of console.log
// }

// console.log(increaseByOne([1, 2, 3, 4]));

// function addNum(array,num) {
//    let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//       newArray.push(array[i] + num);        
//     }
//     return newArray;
// }
// console.log(addNum([1,2,3,4],5));

// function addArrays(array1,array2) {
//     let array3 = [];
//      for (let i = 0; i < array1.length; i++) {
//             array3.push(array1[i]+array2[i]);        
//      }
//     return array3;
// }
// console.log(addArrays([8,9,97],[8, 9,10]));

// function addArrays(array1,array2) {
//     let result = [];
//     let maxLimit =  Math.max(array1.length,array2.length);
//    for (let i = 0; i < maxLimit; i++) {
//     let num1 = array1[i] || 0;
//     let num2 = array2[i] || 0;
//     result.push(num1+num2);
    
    
//    }
//    return result;
// }
//  console.log(addArrays([8,9,97],[8,10]));
// function countPositive(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < 0) {
//             count++;
//         }
        
//     }
//     return count;
// }
// console.log(countPositive([-1,22,0,-999]));

// function minMax(nums) {
    
//     let min = nums[0];
//     let max = nums[0];
    
//     for (let i = 1; i < nums.length; i++) {
        
//         if (nums[i] > max) {
//             max = nums[i];
//         }
//          if (nums[i] < min) {
//             min = nums[i];
//         }
        
     
    
//     //return object1;
//     return  {
//         minimum: min,
//         maximum: max

//     };


// }


// }
// console.log(minMax([1,22,44,22,543]));


// function countWords(words) {
//     let Apple = 0;
//     let Grape = 0;
//     for (let i = 0; i < words.length; i++) {
//         const element = words[i];
//         if(element === 'apple'){
//             Apple++;
//         }
//         if (element === 'grape') {
//             Grape++;
//         }
        
//     }
//     return {
//         apple: Apple,
//         grape: Grape
//     };
// }
// console.log(countWords(['apple','apple','grape','apple']));

// const array = ['ankit','harsh','search','shivam' ];
//  let index  = -1;
// for (let i = 0; i < array.length; i++) {
   
//     if (array[i]==='search') {
//         index = i;
//         break;
//     }
    
    
// }
// console.log(index);
// const array = ['green', 'red', 'blue', 'red'];

// function findIndex(array, word) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === word) {
//             return i;  // ✅ Directly return the first match
//         }
//     }
//     return -1;  // ✅ Return -1 if not found
// }

// console.log(findIndex(array, 'red'));  // ✅ Output: 1
// console.log(findIndex(array, 'blue')); // ✅ Output: 2
// console.log(findIndex(array, 'yellow')); // ✅ Output: -1
// function removeEggs(foods) {
//     let newArray = [];
//     for (let i = 0; i < foods.length; i++) {
//         const element = foods[i];
//         if (element==='eggs') {
//             continue;
//         }
//         else{
//             newArray.push(element);
//         }
        
//     }
//     return newArray;
// }
//  console.log(removeEggs(['eegs','hams','apple','eggs']));

//  function removeEggs(foods) {
//     let newArray = [];
//     for (let i = 0; i < foods.length; i++) {
//         const element = foods[i];
//         if (element!='eggs') {
//             newArray.push(element);
            
//         }
        
//     }
//     return newArray.reverse();
//  }
//  console.log(removeEggs(['eggs','hams','apple','eggs','eggs']));

 function removeEggs(foods) {
    foods.reverse(); // Reverse the array to bring last "egg" first
    let count = 0;
    let newArray = [];

    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg' && count < 2) {
            count++; // Skip first two "egg"
            continue;
        }
        newArray.push(foods[i]); // Keep other elements
    }

    return newArray.reverse(); // Reverse back to original order
}

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));
// Output: ['egg', 'apple', 'ham']

    







