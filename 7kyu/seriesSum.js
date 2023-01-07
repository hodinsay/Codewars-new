// Sum of the first nth term of Series 

// Difficulty: 7-kyu 

// Language: JavaScript 

// Topic: Fundamentals

// Description:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// Solution:

function seriesSum(n){
    if(n === 0){
      return '0.00';
    }
    
    let sum = 1;
    
    for(let i = 1; i < n; i++){
      sum += 1 / (1 + (3 * i));
    };
    
    return `${sum.toFixed(2)}`;
  }
  
  // My thought process:
  // Need to return the sum of n like sum += 1 / (1 + (3 * i)).
  // Implement if() boolean condition for n = 0 to return '0.00' if truthy.
  // Set a variable for sum = 1. 
  // Implement for() loop to have sum += 1 / (1 + (3 * i)) when n > 1. 
  // Return `${sum.toFixed(2)}` to return value with two decimals. 