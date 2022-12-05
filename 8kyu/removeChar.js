// Remove First and Last Character 

// Difficulty: 8-kyu 

// Language: JavaScript

// Topic: Strings, Fundamentals

// Description:

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Solution:

function removeChar(str) {
    return str.slice(1, -1);
}

// Implement slice() method to return characters in between of str index of 1 and -1.