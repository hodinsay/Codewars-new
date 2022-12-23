// Round up to the next multiple of 5

// Difficulty: 7-kyu 

// Language: JavaScript

// Topic: Fundamentals

// Description:

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// Solution:

function roundToNext5(n){
    return Math.ceil(n / 5) * 5;
  }
  
  // My thought process:
  // Need to return a value round up to the next multiple of 5.
  // Implement Math.ceil() to round up n.
  // Best to Math.ceil(n / 5) to a whole number then multiply by 5 to return a round up value multiple of 5.