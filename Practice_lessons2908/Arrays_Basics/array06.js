'use strict';

/**
Complete the function getLastApp such that it returns the last element from
the apps array it receives as a parameter.

/**
 * @param {array} apps
 */
function getLastApp(apps) {
    const lastElem = apps.slice(-1);
    return lastElem;
}

// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"
