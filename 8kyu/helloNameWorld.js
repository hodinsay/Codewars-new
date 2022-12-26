// Hello, Name or World! 

// Difficulty: 8-kyu 

// Language: JavaScript

// Topic: Fundamentals

// Solution: 

function hello(name) {
    if(name === '' || name === undefined){
      return 'Hello, World!';
    }
    
    let fixed = name.toLowerCase();
    let capFirstLetter = fixed.charAt(0).toUpperCase() + fixed.slice(1);
    
    return `Hello, ${capFirstLetter}!`;
  }
  
  // My thought process:
  // Need to return string 'Hello, World!' if parameter is '' or undefined, and return string 'Hello, [Capitalized first letter of parameter]!' for all.
  // Implement an if() boolean to generate 'Hello, World!' if parameter is truthy.
  // Set a variable expression to lower case of all the letters in a given parameter.
  // Set another variable to capitalize the first letter of the string with charAt(0).toUpperCase() method
  // Combine the rest of string with slice(1) method.
  // Return `Hello, ${capFirstLetter}!`