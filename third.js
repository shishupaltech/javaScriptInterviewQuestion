// // function real(){
// //     console.log("I am real. Always run me");
// // }
// // function real(){
// //     console.log(" 😜 No I am the real one");
// // }
// // real();
// // function real(){
// //     console.log("You both are wated 😂😂");
// // }
// console.log(global);
// javascript code run under the execution context which contains global and this 
// // gloable in node case 
// // window in the browser case 

// // --- this 
// // Node = {}
// // browser = window 
// // console.log(this);
// // // console.log(a);
// // let a;
// // console.log(a);
// // a = 10;
// // console.log(a);


console.log("varName", varName);
var varName;
console.log("varName", varName);
varName = "Captain America";
fn();
console.log("varName", varName);
function fn(){
    console.log("Hello from fn");
}
fn();
console.log("my name is ");
fncontainer()
var fncontainer = function(){
    console.log("I am an Expression");
}
fncontainer();

