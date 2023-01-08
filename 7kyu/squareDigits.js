// Square Every Digit

// Difficulty: 7-kyu 

// Language: JavaScript

// Topic: Mathematics, Fundamentals

// Description:

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// Solution:

function squareDigits(num){
    let numStr = num.toString().split('');
    let concat = '';
    
    for(let i = 0; i < numStr.length; i++){
      concat += numStr[i] * numStr[i];
    }
    
    return Number(concat);
  }
  
  // My thought process:
  // Need to return each digit of num squared and concatenated as number.
  // Set a variable numStr to turn num to string with toString(), then use split('') to return an array of each digit.
  // Set a variable concat to empty string.
  // Implement a for() loop for numStr when i < numStr.length to have concat += numStr[i] * numStr[i] for each digit.
  // Return Number(concat) to return value as number instead of string.

  