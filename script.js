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

//init
const numbers = [1, 2, 3, 4, 5];

//       //step
numbers.forEach((element) => {
  console.log(element);
});

//for version
for (let i = 0; i < numbers.length; i++) {
  console.log(`(for version): ${numbers[i]}`);
}

//NESTED FORS

debugger;
// Outer loop, prints 12 months of year
for (let month = 1; month <= 12; month++) {
  console.log(`month: ${month}`);

  // inner loop, prints 30 days of month
  for (let day = 1; day <= 30; day++) {
    console.log(`\tday: ${day}`);
  }
}
https://youtu.be/AyESPz9247k?si=IsSSZ5c7XpHaDmhB 
