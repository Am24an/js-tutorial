const accountId = 544545
let accountEmail = "Aman1234@gmail.com"
var accountPassword = "321456"
accountCity = "Gaya ji" // it can be used but this is not the right way to use.
let accountState;

// accountId = 23455 // Not allowed 

accountEmail = "aman234@gmail.com"
accountPassword = 258963
accountCity = "ooty"

console.log(accountId);
/*
Prefer not to use var
because of the issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])