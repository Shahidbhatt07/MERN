// Learning JavaScript

//var let constant


//variable declaration
var a;

//variable initialisation
a=10;
console.log(a);
console.log(typeof a);


a="hello"; //reinitalise of variable a
console.log(a);
console.log(typeof a);

a=true;
console.log(a);
console.log(typeof a);

a=null;
console.log(a);
console.log(typeof a);

//Number
var num=10
console.log(num);

var boolean=2.4
console.log(boolean);


//Bolean
var t=true;
var f=false;
console.log(t);
console.log(typeof a);
console.log(f);
console.log(typeof a);

//Strins
//    ""(double quotes),       ''(single quotes),       ``(backtics)      used for strings

var str = 'a'
console.log(str);
console.log(typeof str);

str='how u doin?'
console.log(str);
 //for line drops use \n
str="how r u doing?\n how is ur family?\n what do u do?"
console.log(str);

//for line drops use `` backtics
str=`how r u doing?
              how is ur family?
     what do u do?`
     

     //use of `` backtics
     //Example of half of a number

     var num=200;
     console.log(`half of ${num} is ${num/2}`);

     //var has some problems/drawbacks
     // 1). redeclaration is allowed

     var r="hello";
     console.log(r);

     var r=100;
     console.log(r);

     // To overcome redeclaration 
     // let keyword is used

     let l=100;
     console.log(l);

    //  let l="200"; //SyntaxError: Identifier 'l' has already been declared
    //  console.log(l);
    
    //we can reinitialise the variable but we can nor redeclare variable
    l=300;
    console.log(l);

    //Loops in JS
     
    var num=10;
    for(var i=0;i<num;i++){
      if(i%2==0){
          console.log("num is even")
      }
    }

    //Const    Neither redeclare nor reinitialise
    const b=2;
    console.log(b);

     const b=4
    //  b=4 //TypeError: Assignment to constant variable.
    