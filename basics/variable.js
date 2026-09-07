const accountId = 144553
let accountEmail="Virat@google.com"
var accountPassword = "12345"
accountCity="Jaipur"


// accountId=2?? not allowed because it is a constant variable
accountEmail="hc@hc.com"
accountPassword="2121212"
accountCity="Bengaluru"

/*
prefer not use var
because it is function scoped and can be redeclared and updated
*/

console.log(accountId)
console.table([accountEmail, accountPassword, accountCity])