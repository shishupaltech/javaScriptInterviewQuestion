// let & const 
// temporal dead zone 
// {block} scope 
// variable shadowing 
// var/let/const 

// let varName;
// // default -> undefined
// console.log("varName on line number 2",varName);
// varName = 20;
// varName = 30;
// console.log("varName on line number 8",varName);
/*

keyword   scope    Reasign   Redeclared   Tdz(tmp)
var      function   ✅       ✅          ❌
let     block       ✅      ❌           ✅
const   block       ❌      ❌           ✅

*/
