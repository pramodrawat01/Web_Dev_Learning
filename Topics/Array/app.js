// // function called 'sumEvenNumbers' that takes an array of numbers as a parameter
// // and returns the sum of all even numbers in the array.
// function sumEvenNumbers(numbers){
//     let sum=0;
//     for(let i=0; i<=numbers.length; i++){
//         if(numbers[i]%2==0){
//             sum += numbers[i];
//         }
//     }
//     return sum;
// }
// console.log(sumEvenNumbers([4,1,2,3,4,8]));



// // function that takes an array of numbers as an argument 
// // and returns the sum of all the numbers in the array.
// function sumOfNumbers(numbers){
//         let total =0;
//         for(let i=0; i<numbers.length;i++){
//             total += numbers[i]
//         }
//         return function final(){
//             return total
//         }
// }
// let arr = [1,2,3,4,5,9];
// let ans = sumOfNumbers(arr)
// console.log(ans())




// //  function that takes an array of strings as an argument and returns a new
// //  array with only the strings that have a length greater than 5.
// function returnString(number){
//     let arr = []
//     for(let i=0; i<number.length; i++){
//         if(number[i].length >= 5){
//             arr.push(number[i])
//         }
//     }
//     return arr;
// }
// console.log(returnString(["this", "sum", "string", "function", "Array"]));



// // function that takes an array and returns an another array in reverse order
// function reverseArray(numbers){
//     let arr = [];
//     for(let i=0, j=numbers.length-1; i<numbers.length, j>=0; i++, j--){
//         arr[i] = numbers[j]
//     }
//     return arr
// }
// let catchReverseArray = reverseArray(["r", "t", "h", "u", "b"]);
// console.log(catchReverseArray)
// using .reverse() method
// let arr = [2,34,42,45,0]
// let result = arr.reverse()
// console.log(result)

// // Does the element exist in an array or not
// function checkElement(arrayElement, number){
//     for(let i=0; i<arrayElement.length; i++){
//         if(arrayElement[i]==number){
//             console.log(number)
//             return true
//         }
//     }
//     return false
// }
// let catchCheckElement = checkElement([2,4,6,36,3,90,6,35], 36);
// console.log(catchCheckElement);



