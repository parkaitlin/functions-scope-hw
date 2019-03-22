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

// // Palindrome again
// const checkPalindrome = (String) => {
//     let array = [];
//     let newString = string.split('');
//     let letters = /^[A-Za-z]+$/;
//     for(i = 0 ; i <= newString.length; i++){
//         if(newString.includes(letters[i])){
//             array.push(letters[i]);
//         };
//     };
//     if(Array.length === String.lenth){
//         return 'true'
//     } else {
//         return 'false'
//     };
// };

//Digit Sum
const sumDigits = (input) => {
    let array = input.toString().split('');
    array.reduce(function (accumulator, currentValue){
        return accumulator + currentValue;
    }, 0);
};

sumDigits(42);
