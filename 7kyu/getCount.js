// Vowel Count 

// Difficulty: 7-kyu

// Language: JavaScript

// Topic: Strings, Fundamentals

// Description:

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Solution:

function getCount(str) {
    let count = 0;
    
    for(let i = 0; i < str.length; i++){
      if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count += 1;
      }
    }
    
    return count;
  }
  
  // My thought process:
  // Need to return the number of vowel within a given string.
  // Set let count = 0 variable expression that will be the total count.
  // Implement for() loop method to check each letter within a string.
  // Implement if() boolean to check for vowel and return count += 1 if truthy.
  // Return the total count value.