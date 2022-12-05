// Sum of Positive 

// Difficulty: 8-kyu

// Language: JavaScript

// Topic: Arrays, Fundamentals

// Description:

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Solution:

function positiveSum(arr) {
    let sum = 0;
    
    for(let i = 0; i <= arr.length; i++){
      if(arr[i] > 0){
        sum += arr[i];
      }
    }
    
    return sum;
}
  
  // Define a variable for sum and let sum = 0 by default.
  // Implement a for() loop method.
  // Impplement an if() statement to filter negative num in the arr by setting condition to arr[i] > 0.
  // If truthy, then return sum += arr[i].
  // Return sum total!