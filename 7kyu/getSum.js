// Beginner Series #3 Sum of Numbers 

// Difficulty: 7-kyu 

// Language: JavaScript

// Topic: Fundamentals, Algorithms

// Description: 

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

// Solution:

function getSum(a, b){
    if (a === b){
      return a;
    }else if (a > b){
      return a += getSum(a-1, b);
    } else if (a < b) {
      return a += getSum(a+1, b);
    }
  }
  
  // My thought process:
  // Need to return the sum between a and b, but return a if a equals b.
  // Implement if...else boolean conditions.
  // For a === b, if truthy then return a.
  // For a > b, if truthy then return a + getSum(a - 1, b) via recursive until a === b.
  // for a < b, if truthy then return a + getSum(a + 1, b) via recursive until a === b.