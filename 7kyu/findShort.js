// Shortest Word 

// Difficulty: 7-kyu 

// Language: JavaScript

// Topic: Fundamentals

// Description: 

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Solution:

function findShort(s){
    let arr = s.split(' ');
    let shortest = arr[0];
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length < shortest.length){
        shortest = arr[i];
      }
    }
    
    return shortest.length;
  }
  
  // My thought process:
  // Need to return the length of the shortest word given in a string of words.
  // Implement split(" ") method to return each word in an array.
  // Implement a for() loop method to determine the shortest word length within the array.
  // Comparing each word starting from index 0.
  // Return the shortest.length.