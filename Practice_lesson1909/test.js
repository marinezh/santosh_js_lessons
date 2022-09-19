// console.log('A');
// setTimeout(()=> {
//     console.log('B');
// }, 2000);
// console.log('C');

const temp = [10,25,55];

sumTemp(temp, value => {
    console.log(value);
    return value
});

console.log(sumTemp());