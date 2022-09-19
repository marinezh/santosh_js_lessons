'use strict';

/**
Update the delayedWelcome function such that it delays the console.log
call 1 second into the future.*/

/**
 * @param {string} name
 */

setTimeout(()=> {
        const delayedWelcome = name => {
                console.log(`Welcome ${name}`);
                return '';
        }

// Sample usage - do not modify
console.log(delayedWelcome("Sam"));
console.log(delayedWelcome("Alex"));




},3000);
 


