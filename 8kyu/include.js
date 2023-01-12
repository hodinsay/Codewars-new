// Enumerable Magic - Does My List Include This?

// Difficulty: 8-kyu 

// Language: JavaScript

// Topic: Fundamentals

// Description:

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// Solution:

function include(arr, item){
    return arr.includes(item);
  }
  
  // My thought process:
  // Need to return either true or false if item is in arr.
  // Implement includes() to search whether item is in arr and to return either true or false.