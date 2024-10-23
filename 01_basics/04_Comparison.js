// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true   
console.log(null <= 0); // true

/*
The reason is that an equality check == and comparisons > < <= >=
work differently.
Comparisons convert null to a number, treating it as 0.
That's why 
null >= 0 is true
null > 0 is false
*/

// console.log(undefined == 0) 
// console.log(undefined > 0)  // all values returns false for undefined 
// console.log(undefined < 0)

// === this operator not only compare but also the datatypes whether they are same or not.
console.log("2" === 2);
