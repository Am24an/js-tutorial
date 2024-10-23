let score = 51 // let score = "51"  ->this is string

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);


// "51" => can be converted into 55
// "51abc" => NaN(Not a Number)
// true => 1;  false => 0

let isLoggedIn = "1"
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);  // output true

// 1 => true; 0=> false
// "" => false
// "Aman" => true

let somenumber = 21
let stringNumber = String(somenumber)

console.log(stringNumber)
console.log(typeof stringNumber);

// ***************** Operations *************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**5)
// console.log(2/4)
// console.log(2%4)

let str1 = "hello"
let str2 = " Developer"
let str3 = str1 + str2
console.log(str3);


// console.log("1" + 2);    // 12
// console.log(1 + "2");     // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2");  // 32

//tricky conversion(Not recommended)
console.log(+true);
console.log(+"");

let num1, num2, num3
num1=num2=num3 = 5 + 6
let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study

//  https://tc39.es/ecma262/multipage/abstract-operations.html