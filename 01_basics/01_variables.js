const accountId = 14443
let accountEmail = "tamalcrj2002@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;

// accountId = 34 // not allowed


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "tom@gfh.com"
accountPassword = "2345555"
accountCity = "delhi"

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])