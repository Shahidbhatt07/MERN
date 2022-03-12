// let randomValue = { name: "Lydia" };
// randomValue = 23;

// if (!typeof randomValue === "string") {
//   console.log("It's not a string!");
// } else {
//   console.log("Yay it's a string!");
// }

// const user = {
// 	email: "my@email.com",
// 	updateEmail: function (email){
// 		this.email = email
// 	}
// }

// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, '🥂'];
// /* 4 */ emojis.length = 0;

// user.updateEmail("new@email.com")
// console.log(user.email)

// let count = 0;
// const nums = [0, 1, 2, 3];

// for(var i in nums){
// 	if (i) count += 1
// }

// console.log(count)

// const add = function (x) {
//     return x + x;
// }

// function myFunc(num = 2, value = add(num)) {
//   console.log(num, value);
// }

// myFunc();
// myFunc(3);

// const person = {
//     name: 'Lydia Hallie',
//     address: {
//       street: '100 Main St',
//     },
//   };
  
//   Object.freeze(person);



// const person = { name: 'Lydia Hallie' };

// Object.seal(person);

// const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

// console.log(emojis.flat(1));

// const randomValue = 21;

// function getInfo() {
//   console.log(typeof randomValue);
//   var randomValue = 'Lydia Hallie';
// }

// getInfo();

// const add = function (x) {
//     function inner (y) {
//         function innermost (z) {
//             console.log(x, y, z);
//             return x + y + z;
//         }
//         innermost(6);
//     }
//     inner(5);
// }

// add(4);

// const groceries = ['banana', 'apple', 'peanuts'];

// if (groceries.indexOf('banana')) {
// console.log('We have to buy bananas!');
// } else {
// console.log(`We don't have to buy bananas!`);
// }


// const person = {
//     firstName: 'Lydia',
//     lastName: 'Hallie',
//     pet: {
//       name: 'Mara',
//       breed: 'Dutch Tulip Hound',
//     },
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   console.log(person.pet?.name);
//   console.log(person.pet?.family?.name);
//   console.log(person.getFullName?.());
//   console.log(member.getLastName?.());
  

// let num = 1;
// const list = ['🥳', '🤠', '🥰', '🤪'];

// console.log(list[(num += 1)]);


// function sumValues(x, y, z) {
//     return x + y + z;
//   }


// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   const changeAge = (x = { ...person }) => (x.age += 1);
//   const changeAgeAndName = (x = { ...person }) => {
//     x.age += 1;
//     x.name = 'Sarah';
//   };
  
//   changeAge(person);
//   changeAgeAndName();
  
//   console.log(person);


// const food = ['🍕', '🍫', '🥑', '🍔'];
// const info = { favoriteFood: food[0] };

// info.favoriteFood = '🍝';

// console.log(food);


// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
//   };
  
//   const colors = ['pink', 'red', 'blue'];
  
//   console.log(colorConfig.colors[1]);

// function nums(a, b) {
//     if (a > b) console.log('a is bigger');
//     else console.log('b is bigger');
//     return
//     a + b;
//   }
  
//   console.log(nums(4, 2));
//   console.log(nums(1, 2));

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   for (const [x, y] of Object.entries(person)) {
//     console.log(x, y);
//   }

// let newList = [1, 2, 3].push(4);

// console.log(newList.push(5));

// console.log('I want pizza'[2]);

// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//       const message = "Yay! You're old enough!";
//     }
  
//     return message;
//   }
  
//   console.log(checkAge(21));

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   let city = person.city;
//   city = 'Amsterdam';
  
//   console.log(person);

// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);

// console.log(3 + 4 + '5');


// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   for (const item in person) {
//     console.log(item);
//   }

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));


// var num = 8;
// var num = 10;

// console.log(num);

// function sumValues(x, y, z) {
//     return x + y + z;
//   }

// let count = 0;
// const nums = [0, 1, 2, 3];

// for(var i in nums){
// 	if (i) count += 1
// }

// console.log(count)

// const person = {
//     name: 'Lydia Hallie',
//     address: {
//       street: '100 Main St',
//     },
//   };
  
//   Object.freeze(person);


// function nums(a, b) {
//     if (a > b) console.log('a is bigger');
//     else console.log('b is bigger');
//     return
//     a + b;
//   }
  
//   console.log(nums(4, 2));
//   console.log(nums(1, 2));


//harry bhai ka tutorial
// var arr=[1,2,3,4,5,6,7]
// for(var i=0; i<arr.length;i++){
//   // if(1==5){
//   //   continue;
//   // }

//   // if(i==2){
//   //   break;
//   // }
   
//   console.log(arr[i]);
  
// }

//os module
const os= require("os")

let mySystemArch= os.arch();
// console.log(mySystemArch)

let myCpuInfo=os.cpus();
// console.log(myCpuInfo);

let hostname=os.hostname();
// console.log(hostname);

let networkInfo=os.networkInterfaces();
// console.log(networkInfo);

// console.log(os.release());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.totalmem());
// console.log(os.userInfo());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.tmpdir());


// let uptime=os.uptime();
// console.log(uptime);
// let uptimeInMinutes=os.uptime()/60;
// console.log(uptimeInMinutes);
// let uptimeInHours=os.uptime()/3600;
// console.log(uptimeInHours);
// let uptimeInDays=os.uptime()/86400;
// console.log(uptimeInDays);

