// Highest and Lowest 

// Difficulty: 7-kyu 

// Language: JavaScript

// Topic: Fundamentals, Strings

// Description:

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solution:

function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);
    
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
  }
  
  // My thought process:
  // Need to return the min and max from a string of numbers.
  // Set a variable arr to return an array of numbers by utilizing split(' ') then map(Number) to turn each digit from string to number.
  // Return `` template literals of `${Math.max(...arr)} ${Math.min(...arr)}` to return the max and min values as string.