const isLegal = (age) => {
  return age >= 18;
};
console.log(isLegal(16));

const isLegal1 = (age) => age >= 18;

console.log(isLegal1(16));

const name = "SSam Bluee";
// name.trim();
console.log(name.trim());

const message = "You are welcome";
console.log();

const users = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Tom" },
];

const userNamesArray = users.map((user) => user.name);
console.log(userNamesArray);

const csv = userNamesArray.join(", ");
console.log(csv);

const grades = [10, 20, 5, 5];

const sum = grades.reduce((total, current) => {
  return total + current;
});

const result = grades.reduce((total, current) => {
  return total * current;
});
console.log(sum);
console.log(result);

const dimensions = [20, 15];
const width = dimensions[0];
console.log(width);
const height = dimensions[1];
console.log(height);

const dimentionsDestruct = [200, 15, 500];
const [widthNew, heightNew, extraPlane] = dimentionsDestruct;
console.log(widthNew);
console.log(heightNew);
console.log(extraPlane);
////////////////////////////////
const lat = [5.4674];
const long = [1.5467];

const point = [...lat, ...long];
console.log(point);

const item = ["tissues", "oranes", "apple"];
const otherItems = [...item, "tomato"];

console.log(otherItems);

// optinal chaining
const user = { details: { name: { firstName: "Sam" } }, data: null };
