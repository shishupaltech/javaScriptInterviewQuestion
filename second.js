// types of function 
// function statement 
// define 
function sayHello(params){
    console.log("hello",params);
   
}
// fn invocation 
sayHello(10);
// note when you will not pass anything in the funtion but function definatino take variable in that snerio 

// console.log("...................");
// sayHello("Hello");
// console.log("...................");
// sayHello([1,2,3,4,5]);
// console.log("...................");
// sayHello({name:'shishupal'});

// function expression 
let fncontainer = function(){
    console.log("I am Expression");

}
fncontainer();

// iife->Immediately invoked function expression.
// /require, pollution, clousure
(function fun(){
    console.log("i am iife");
    console.log("i will run on my own");
})();

// Arrow function-> syntax, react,this 
let fun=num=> num*10;
console.log(fun(10));

// first class citizens;
// function are treated as a variable 
//  1. assignment -> fn express 
// 2. variable can be passed as a parameter
// 3. function can be passed as a parameter->fp,hof,callbacks variable can be returned from a function 
//4. functions can be returned from a function -> closure.
// function outer(){
//     console.log("I am outer function");
//     return function inner(){
//         console.log("I am inner function");
//     }
// }
// let rVal = outer();
// console.log("rVal",rVal);
// rVal();

