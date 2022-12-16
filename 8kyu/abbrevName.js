// Abbreviate a Two Word Name 

// Difficulty: 8-kyu 

// Language: JavaScript 

// Topic: Strings, Fundamentals

// Description:

function abbrevName(name){
    return (
    name
      // split the name into two words
      .split(" ")

      // take first char of both parts and capitalize them
      .map((part) => part[0].toUpperCase())

      // join both characters with a dot
      .join(".")
  );
}