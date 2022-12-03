// Even or Odd 

// Difficulty: 8-kyu 

// Language: JavaScript

// Topics: Mathematics, Fundamentals

// Description:

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Solution:

function evenOrOdd(number) {
// Use if...else statement to test the input value.
// Use the modulus (%) operator to specified the condition. 
    if(number % 2 === 0){
    // If truthy
        return "Even";
    } else {
    // If falsy
        return "Odd";
    }
}