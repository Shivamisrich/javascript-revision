//FizzBuzz problem.
// for (let i = 1; i <= 20; i++) {
   
//     if (i%3===0 && i%5===0) {
//         console.log('FizzBuzz');
//     }
//    else if(i%3===0){
//         console.log('Fizz');
//     }
//     else if (i%5===0) {
//         console.log('Buzz');
//     }
//     else{
//         console.log(i);
//     }
    
    
// }
//11w.
function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        return i;
      }
    }

    return -1;
  }

  function unique(array) {
    for (let i = 0; i < array.length; i++) {
        const words = array[i];
        if (findIndex(array,words)) {
            
        }
    }
  }


console.log(findIndex(['shivam','tiwari','is','the','final','boss'],'dkd'));
