"use strict";

/**
Complete the function evenOrOdd such that it returns the string "even"
when the number parameter it receives is even and "odd" otherwise.

Tests
Implements evenOrOdd() for even numbers
Implements evenOrOdd() for odd numbers
/**
 * @param {string} number
 */
function evenOrOdd(number) {
    if (number % 2 == 0){
        return 'number is even'
    } else {
        return 'number is odd'
    }
}
console.log(evenOrOdd(2))
console.log(evenOrOdd(6))
console.log(evenOrOdd(5))
console.log(evenOrOdd(7))