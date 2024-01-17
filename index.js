for (let y = 9; y >= 0; y--) {
  // console.log(y)
}

// example 3
// *
// **
// ***
// ****
// *****
// ******

for (let z = 1; z <= 6; z++) {
  console.log("*".repeat(z)); // L1 T,
}

//ASSIGNMENT

// example 4
// ******
// *****
// ****
// ***
// **
// *

for (let z = 6; z >= 1; z--) {
  console.log("*".repeat(z));
}

// example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// Increasing pattern
for (let z = 1; z <= 5; z++) {
  let spaces = " ".repeat(5 - z);
  console.log(spaces + "*".repeat(z));
}

// Decreasing pattern
for (let z = 4; z >= 1; z--) {
  let spaces = " ".repeat(5 - z);
  console.log(spaces + "*".repeat(z));
}

// example 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// Upper pyramid pattern
for (let z = 1; z <= 5; z++) {
  let spaces = " ".repeat(5 - z);
  console.log(spaces + "*".repeat(z * 2 - 1));
}

// Lower pyramid pattern
for (let z = 4; z >= 1; z--) {
  let spaces = " ".repeat(5 - z);
  console.log(spaces + "*".repeat(z * 2 - 1));
}

// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *
let z = 7;
console.log("*".repeat(z));
for (z = 1; z <= 7; z++) {
  let spaces = " ".repeat(7 - 1);
  console.log(spaces + "*".repeat(1));
}

// example 8
//*******
//*
//*
//*
//*
//*
//*

let y = 7;
console.log("*".repeat(y));
for (y = 1; y <= 7; y++) {
  let spaces = " ".repeat(7 - 1);
  console.log("*".repeat(1) + spaces);
}

//generate six random numbers between 1 and 49
console.log("Generates six random numbers between 1 and 49");
// let x = Math.random() * 49;
// console.log(x);
let randomNumbers = [];

for (let i = 0; i < 6; i++) {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 49 + 1);
  randomNumbers.push(randomNumber);
}
console.log(randomNumbers);
