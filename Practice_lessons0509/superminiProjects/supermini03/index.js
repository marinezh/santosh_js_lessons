"use strict";

/**
Complete the function isPromoCodeValid such that it returns true when the promo code is valid 
and false otherwise.
/**
 * @param {boolean} code
 */

// function isPromoCodeValid() {
//   console.log(code.value.length);
//   if (code.value.length > 5 && code.value.length < 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// second variant

function isPromoCodeValid(code) {
  console.log(code.length);
  return code.length > 5 && code.length < 10;
}

// Sample usage - do not modify
const code = document.querySelector("#promo-code");

code.addEventListener("keyup", () => {
  let result = isPromoCodeValid(code.value);
  if (result) {
    code.classList.remove("error");
  } else {
    code.classList.add("error");
  }
});

// done
