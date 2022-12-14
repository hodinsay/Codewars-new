// Convert a String to Number!

// Difficulty: 8-kyu

// Language: JavaScript

// Topic: PerformanceResourceTiming, Strings, Fundamentals

// Description:

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// Solution:

const stringToNumber = function(str){
    return Number(str);
  }
  
  // My thought process:
  // Need to return string as number.
  // Implement Number() method.