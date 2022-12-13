// Find the Position!

// Difficulty: 8-kyu 

// Language: JavaScript

// Topic: Fundamentals

// Description: 

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// Solution:

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
  }
  
  // My thought process:
  // Need to return the alphabet number of letter.
  // All letters are in lower cap.
  // Create a string of all 26 alphabet letters and put in a variable expression.
  // Should return the string "Position of alphabet: " + ...
  // Implement indexOf(letter) + 1 method to return the index value of the alphabet string.