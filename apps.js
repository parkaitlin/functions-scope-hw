console.log('Homework!');

//1. a parameter are input values we can include when we 
    //declare a function. An argument is when we actually invoke 
    //a function.
//2. Return 'exits' or termnates the the block of code and sends 
    //the output to the console when the function is invoked. 
    //Console.log does not affect our code like return, it simply 
    //outputs whatever is being invoked.
//3. For a function, to return a value "return ()" needs to be 
    // included to stop the code and send an output to the console.

// Palindrome again
// const checkPalindrome = (str) => {
//     let remove = /[/W_]/g;
//     let initialString = str.toLowerCase().replace(remove, '');
//     let reverseString = initialString.split('').reverse().join('');
//     if(reverseString === initialString) {
//         return true
//     } else {
//         return false
//     };
// };

// console.log(checkPalindrome('Radar'));
// console.log(checkPalindrome('Borscht'));


//Digit Sum
const sumDigits = (input) => {
    let numString = input.toString();
    let numbers = [];
    let sum = 0;
    for(let i = 0; i < numString.length; i++){
        numbers.push(+numString[i]);
    };
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    };
    return sum;
};

console.log(sumDigits(42));
console.log(sumDigits(89));
console.log(sumDigits(153));


// Pythagoras
// const calculateSide = (sideA,sideB) => {
//     if ((typeof sideA !== 'number') || (typeof sideB !== "number")){
//         return false;
//     } else {
//         return Math.sqrt(sideA * sideA + sideB * sideB);
//     };
// };

// console.log(calculateSide(8,6));

// Sum Array
// const sumArray = (array) => {
//     array.reduce(function (accumulator, currentValue){
//         return accumulator + currentValue;
//     }, 0);
// };

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

//Prime numbers

// const checkPrime = (number) => {
//     if(number === 1){
//         return 'false';
//     } else if(number === 2){
//         return 'true';
//     } else {
//         for(let i = 2; i < number; i++){
//             if(number % i === 0){
//                 return 'false';
//             } else {
//                 return 'true';
//             };
//         };
//     };
// };
// console.log(checkPrime(37));
// console.log(checkPrime(49));
// console.log(checkPrime(97));
// console.log(checkPrime(100));

// const printPrime = (number) => {
//     for(i = 2; i <= number; i++){
//         if(checkPrime(number) === true) {
//             console.log(i);
//         }
//     }
// };