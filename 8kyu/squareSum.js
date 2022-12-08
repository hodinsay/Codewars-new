// Square(n) Sum 

// Difficulty: 8-kyu 

// Language: JavaScript

// Topic: Arrays, Lists, Fundamentals

// Description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Solution:

function squareSum(numbers){
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++){
      sum += numbers[i] ** 2;
    }
    
    return sum;
}
  
  // Set a variable expression let sum = 0.
  // Implement a for() loop method to loop through each number in the array.
  // Use (**) operator to square each number.
  // Use sum += to add each value to the total sum < numbers.length.
  // Return total sum!