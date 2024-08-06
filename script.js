//FOR
for (let i = 0; i < 5; i++) {
  console.log(`(for) i = ${i}`);
}
//WHILE
let i = 0;
while (i < 5) {
  console.log(`(while) i = ${i}`);
  i++;
}
//DO WHILE
let j = 0;
do {
  console.log(`(do while) j = ${j}`);
  j++;
} while (j < 5);

let input;

do {
  input = prompt("enter password: ");
} while (input != "123");
console.log("access granted");

//FOR EACH LOOPS
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((x) => {
  if (x === 3) {
    console.log(x);
  }
});
