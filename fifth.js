// // var a = 10;
// // console.log("line number 2", a);
// // function fn(){
// //     console.log("line number 4", a);
// //     var a= 20;
// //     a++;
// //     console.log("line number 7",a);
// //     if(a){
// //         var a = 30;
// //         a++;
// //         console.log("line number ll",a);
// //     }
// //     console.log('line number 13',a);
// // }
// // fn();
// // console.log("line number 2",a);

// // 2015 es6 
// // hosting 
// console.log("line number 3",varName);
// // declare
// var varName;
// varName = 10;
// console.log("line number 8",varName);

// varName = 20;
// console.log("line number 11",varName);
// var varName;
// console.log("line number 13",varName);

// var function scope 


function fn(){
    console.log(a);
    var a = 10;
    console.log(a);
    if(a==10){
        var a ;
        console.log(a);
    }
    console.log(a);

}
fn();