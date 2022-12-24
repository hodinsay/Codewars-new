// Pre-FizzBuzz Workout #1 

// Difficulty: 8-kyu 

// Language: JavaScript

// Topic: Fundamentals

// Description:

// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

// Solution:

function preFizz(n) {
    let arr = [];
    
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    
    return arr;
  }
  
  // My thought process:
  // Need to return an array of parameter starting from 1.
  // Set a variable expression arr = [].
  // Implement a for() loop method to generate values starting from 1.
  // Implement push() method to push generated value into the arr.