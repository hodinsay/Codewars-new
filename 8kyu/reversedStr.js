// Reversed Strings 

// Difficulty: 8-kyu 

// Language: JavaScript 

// Topic: Strings, Fundamentals

// Description: 

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Solution:

function solution(str){
    return str.split('').reverse().join('');
}
  
  // Implement split('') method to split str into individual letter.
  // Implement reverse() method to reverse the order of the letters.
  // Implement join('') method to combine the letters into a string again.