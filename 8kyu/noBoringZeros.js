// No Zeros for Heros 

// Difficulty: 8-kyu 

// Language: JavaScript

// Topic: Fundamentals

// Description:

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// Solution:


// JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output

// Solution:

function noBoringZeros(n) {
  return Number(n.toString().replace(/0+$/, ''));
}

// Given a number and expected to return a number.
// Convert the number to a string, so I can use the .replace() method.
// Need to use a regex expression, that will specify to only remove 0’s at the end.
// /0+$/ to specify the end of the string.
// Revert the string back to a number using Number() method.
