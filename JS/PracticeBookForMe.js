// function calculator(str,a,b){
//     if (str=='add'){
//         return function add(){
//             console.log(a+b);

//         }
//     }
// }
// let returnedFunc = calculator('add',2,3);
// returnedFunc();


// let sayHi=function(){
//     console.log("hello guys i am function expression");
// }
// console.log("line 57\n" + sayHi);
// sayHi();


// function add(a,b){
//     return(a+b)
// }
// let a=add(2,5)
// console.log("line 24\n"+ a);



// let person={
//     name:"shahid",
//     roll: 2023 ,
//     phone:9999999,
//     gender:"male",
//     height: "180cm"
// }
// console.log(person)
// console.log(person.name)

// Arrays End


// automatic conversions in js starts

var ans= "5" + 1;
 console.log(ans)   //ans 51

 var ans= 1 + "5";
 console.log(ans) //ans 15

console.log(null*10) //ans 0
console.log(undefined*10)   // ans NaN--> Not A Number

console.log(null/10) //ans 0
console.log(undefined/10)    //ans Nan

console.log("5" - 1);   // ans 4
console.log(10 - "1");  //ans 9
console.log(10-"15"); // ans -5
console.log("5"-10); // ans -5


console.log("ten" * 3); // ans NaN   reason: string ten cannot be mapped by a number '3'
console.log("10" * 3);  // ans 30  string * number = Number
console.log(3 * "ten");  // number * string = NaN
  

console.log("ten" / 3);  //ans NaN
console.log("10" / 3);    //ans 3.333333....
console.log(3 * "ten");  // NaN

console.log("ten" % 3); //ans NaN 
console.log("10" % 3);   //ans 1
console.log(3 % "ten");    //ans NaN


