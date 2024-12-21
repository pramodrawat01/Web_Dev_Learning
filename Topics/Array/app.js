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

// // without function
// let numbers = ["r", "t", "h", "u", "b"]
// let arr = [];
// for(let i=0, j=numbers.length-1; i<numbers.length, j>=0; i++, j--){
//     arr[i] = numbers[j]
// }
// console.log(arr)

//using .reverse() method
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


// // find the maximum and minimum element of array
// const INT_MAX = Number.MAX_SAFE_INTEGER;
// function find(arr){
//     let min=INT_MAX;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(find([3,4,5,62,8]));


// // short an array in ascending order
// function shortArray(arr){
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=0; j<arr.length-1; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(shortArray([2,4,12,3,9,10,8,5]));


// // Move all negative numbers to the begining and positive to end
// function shortArray(arr){
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=0; j<arr.length-1; j++){
//             if(arr[j]>arr[j+1]){
//                 let extra = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = extra;
//             }
//         }
//     }
//     return arr;
// }
// console.log(shortArray([2,-4,-12,3,9,-10,8,5]));


// // find duplicate elements in an order
// let arr = [2,4,3,5,2,4,1];
// let arr1 = []
// for(let i=0; i<arr.length-1; i++){
//     for(let j=1; j<arr.length-1; j++){
//         if(arr[i]==arr[j]){
//             for(let k=0; k<arr.length-1; k++){
//                 if(arr[i] != arr1[k] ){
//                     arr1.push(arr[i])
//                 }
//             }
            
//         }
//     }
// }
// console.log(arr1);



// // count number of occurrences (or frequency) in a sorted array
// function frequency(arr, num){
//     let count =0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == num){
//             count++
//         }
//     }
//     return count;
// }
// console.log(frequency([2,1,2,3,2,2,3,2,3], 3))



// Find duplicate elements in an array
// function duplicate(arr){
//     let arr1 = []
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] == arr[j]){
//                 if(!arr1.includes(arr[i])){
//                     arr1.push(arr[i])
//                     break 
//                 }
//             }
//         }
//     }
//     return arr1
// }
// console.log(duplicate([2,3,5,3,6,7,2,6,7,2,2,3,7,9,8,9]))



// // reverse an array with methods
// function reverse(arr){
//     let arr1=[]
//     for(let i=0; i<arr.length; i++){
//         arr1.unshift(arr[i])
//     }
//     return arr1
// }
// console.log(reverse([1,2,3,4,5]))

// // print all prime numbers from an array
// function primeInArray(){
//     let arr = [2,0,1,3,4,2,5,7,8,6,0,8,13,25,17]
//     let count = 0;
//     let arr1 = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>1){
//             for(let j=2; j<arr[i]; j++){
//                 if(arr[i]%j==0){
//                     count ++
//                     break
//                 }
//             }
//             if(count == 0){
//                 arr1.push(arr[i]);
//             }
//             count = 0;
//         }
        
//     }
//     return arr1;
// }
// console.log(primeInArray());

// // count even and odd numbers of an array
// function countOddEven(arr){
//     let countEven=0, countOdd = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0)
//             countEven++
//         else
//             countOdd++
//     }
//     let result = `Even count : ${countEven}, Odd count : ${countOdd}`
//     return result
// }
// console.log(countOddEven([1,2,3,4,5,6,7,8]))

// // search element in an array
// function searchElement(num){
//     let arr = [2,1,5,7,5,7,8]
//     for(let i=0; i<arr.length; i++){
//         if(num==arr[i]){
//             return `${num} found at ${i}th position`
//         }
//     }
//     return `not found`
// }
// console.log(searchElement(8))

// // find largest element in an array
// function findLargest(arr){
//     let max=arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findLargest([12,4,5,2,65,89,34,103]))

// //check number is perfect or not (perfect number: sum of all divisior is equal to number)
// function checkPerfectNumber(num){
//     let temp = 0
//     for(let i=0; i<num; i++){
//         if(num%i==0){
//             temp += i
//         }
//     }
//     if(temp==num){
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(checkPerfectNumber(6))


// //sum of digit of number
// function somOfDigit(num){
//     let total =0, rem=0;
//     while(num>0){
//         rem=num%10;
//         total += rem;
//         num = parseInt(num/10)
//     }
//     return total
// }
// console.log(somOfDigit(1234))


// // all pairs of an array whose sum is equal to the given number    ???
// function findPair(num){
//     let arr = [1,2,3,4];
//     let arr1= []
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i]+arr[j]==num){
//                 let pair = `(${arr[i], arr[j]})`;
//                 arr1.push(pair)
//             }
//         }
//     }
//     return arr1
// }
// console.log(findPair(4))

