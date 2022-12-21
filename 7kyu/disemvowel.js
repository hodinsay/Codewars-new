// Disemvowel Trolls 

// Difficulty: 7-kyu 

// Language: JavaScript

// Topic: Strings, Regular Expression, Fundamentals

// Solution: 

function disemvowel(str) {
    let newStr = (str.replace(/[aeiou]/gi, ''))
    return newStr;
   }
   
   // My thought process:
   // Need to return str with vowels removed.
   // Failed to implement a for() loop function.
   // Implement replace() method to replace vowels with ''. 
   // Learned about regex expression and implement /[aeiou]/gi. g = global search. i = case-insensitive search. 
   // Set a new variable expression for the new string.
   // Return the new string.