// Find the Remainder

// Difficulty: 8-kyu 

// Language: JavaScript

// Topic: Mathematics, Fundamentals 

// Description:

// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

// Solution:

function remainder(n, m){
    if(n < m){
      return m % n;
    } else if(m < n){
      return n % m;
    } else if (m === 0 || n === 0){
      return NaN;
    } else if(m < 0 && n < 0){
      return +0;
    }
  }
  
  // My thought process:
  // Need to return the remainder of the larger value divided by the smaller value.
  // Implement if...else booleans to determine the smallest value.
  // If truthy, implement % operator to return the remainder of the larger value divided by the smaller value.
  // Return NaN if either m or n = 0.