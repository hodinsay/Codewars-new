// Remove String Spaces 

// Difficulty: 8-kyu 

// Language: JavaScript

// Topic: Fundamentals, Strings 

// Description: 

// Simple, remove the spaces from the string, then return the resultant string.

// Solution:

function noSpace(x){
    return x.split(" ").join("");
}
  
  // Implement split(" ") to indentify spaces in between the string.
  // Implement join('') to comnbine all characters together without spaces.