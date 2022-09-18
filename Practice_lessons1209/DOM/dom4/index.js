/**
 * @param {string} cssSelector
 */
const getTextFromSelector = cssSelector => {
    const cssSEl = document.querySelector(cssSelector);
    return cssSEl?.textContent;
}

const getTextFromSelector2 = cssSelector2 => {
    return document.querySelector(cssSelector2)?.textContent ?? "";

}

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // undefined
console.log(getTextFromSelector2("h1")); // undefined
console.log(getTextFromSelector2("h2")); // undefined

// done, but there are some questions