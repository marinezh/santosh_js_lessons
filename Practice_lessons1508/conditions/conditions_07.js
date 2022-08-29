"use strict";

/**
Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

/**
 * @param {string}
 */

function pluralize(noun, number) {
  if (number === 1 || number === 0) {
    return number + " " + noun;
  } else if (number > 1) {
    return number + " " + noun + "s";
  } else if (noun === "goose") {
    return number + "geese";
  }

  // case "sheep": return number + "sheep";
  // case "deer": return number + "deer";
  // case "mouse": return number + "mice";
}

console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("dog", 1));
console.log("I have " + pluralize("pig", 2));
console.log("I have " + pluralize("goose", 2));
console.log("I have " + pluralize("sheep", 2));
console.log("I have " + pluralize("deer", 2));
console.log("I have " + pluralize("mouse", 2));
