// const numbers = [4, 5, 7, 9];

// const doubleNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubleNumbers);

// const names = ["sam", "Alex"];
// const upperNames = names.map(function (name) {
//   return name.toUpperCase();
// });

// console.log(upperNames);

// const user = {
//   id: 1,
//   firstName: "James",
//   lastName: "Bond",
//   age: 20,
// };

// user.firstName = "Collins";
// user.age = user.age + 1;
// console.log(user);

// function addOne(number = 0) {
//   return number + 1;
// }

// console.log(addOne(3));
// console.log(addOne(5));
// console.log(addOne());

// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// };


const questList = ["Angela", "Jack", "Pam", "James", "Jason"]
let newGueast = prompt("enter your name");
if (questList.includes(newGueast)) {
  console.log("welcome");
} else {
  console.log("sorry, maybe next time");
}