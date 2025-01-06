// console.log(1+Number('1'))
// const person1= {
//     name:'Joe',
//     age: 25,
//     address: {
//         zip:'23456',
//         street:'123 main st',
//         city:' new york',
// }
// }
// function bar(person){
//     person.name='Mike'
// }
// bar(person1)
// const person2=person1
// console.log(person2===person1)
// console.log(person1)

// const newPerson = {
//   name: person1.name,
//   age: person1.age,
//   address: person1.address,
// };

// newPerson.name = "Jake";
// console.log("newPerson", newPerson.name);
// console.log('person1', person1.name)
// console.log("newPerson", newPerson.address);
// console.log(person1.address == newPerson.address);

// //////////////////Copy Objects////////////
// console.log([] instanceof Array);
// console.log({} instanceof Object)

// // const newPerson=Object.assign({}, person1)
// //object assign is a shallow copy, it won't make change to person1

// // newPerson.name="Jake"
// // console.log(person1===newPerson)

// // ////spread operator can also create a shallow copy which will not affect the original person
// // const newPerson1={...person1}
// // console.log(newPerson1===person1)

// // console.log(newPerson.address==person1.address)

// //use a 3rd party library Lodash npm install

// let zoo = {
//     name: "Amazing Zoo",
//     location: "Melbourne, Australia",
//     animals: [
//       {
//         species: "Lion",
//         favoriteTreat: "🥩",
//       },
//       {
//         species: "Panda",
//         favoriteTreat: "🎋",
//       },
//     ],
//   };

//   let shallowCopyZoo = { ...zoo};
//   shallowCopyZoo.animals[0].favoriteTreat = "🍖";
//   console.log(zoo.animals[0].favoriteTreat);
//   console.log(shallowCopyZoo)
//   console.log(zoo)
//   console.log(shallowCopyZoo===zoo)
//   console.log(shallowCopyZoo.animals===zoo.animals)
//   // "🍖", not "🥩"

//   function deepCopy(obj) {
//     return JSON.parse(JSON.stringify(obj));
//   }

//   const newZoo=deepCopy(zoo)
//   newZoo.animals.push({
//     species: "Spider",
//     favoriteTreat: "worm",
//   })
// console.log(newZoo)
//   console.log(newZoo===zoo)
//higher order function that can take another function as an argument

//this keyword
// const person1 = {
//     name: "Joe",
//     age: 25,
//     sayHi: function () {
//       console.log("this", this);
//     },
//     getAge: function () {
//       console.log("Age:", this.age);
//     },
//   };

// this keyword is a reference to the object that is executing the current function
// 1. if this is in a normal function, this will be the global/window object

// person1.sayHi();

//   const person2 = {
//     name: "Mike",
//     age: 30,
//     sayHi: person1.sayHi,
//   };

//   // person2.sayHi();

//   const getAge = person1.getAge.bind(person2);
//   // getAge();

//   // (function foqiwjfoiwq() {
//   //   console.log("this", this);
//   // })()

//   const person3 = {
//     fname: "Jake",
//     friends: ["John", "Jane"],
//     getFriendNames: function () {
//       // this refers to person3
//       console.log("line 36", this);

//       // in es5, if there is no arrow function, we can use bind to bind the this keyword
//       // this.friends.forEach(
//       //   function (friend) {
//       //     // without bind, this would refer to the global object
//       //     // with bind, this refers to person3
//       //     console.log(this.fname + " and " + friend + " are friends");
//       //   }.bind(this)
//       // );

//       // in es6, we can use arrow functions
//       this.friends.forEach((friend) => {
//         console.log(this.fname + " and " + friend + " are friends");
//       });
//     },
//   };

// in es5, we did not have arrow functions
// in es6, we introduced arrow functions

// person3.getFriendNames();

// arrow functions do not have their own this keyword

const uniqueArrow = () => {
  console.log("this", this);
};

// uniqueArrow();

// console.log(person1.sayHi === person2.sayHi);

function hof(callbackFn) {
  setTimeout(() => {
    console.log("hello");
    callbackFn();
  }, 2000);
}

// hof(function () {
//   console.log("Hello World");
// });

[1, 2, 3, 4].forEach((num) => {
  // this function is anonymous
  //   console.log(num);
});

// IIFE: Immediately Invoked Function Expression, "iffy"
// we do not really use this kind of things a lot
(function IIFE() {
  //   console.log("this is something that only needs to run once");
})();

// curry
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// here, in the function we are only doing one operation
// so we can use an arrow function and implicit return:
// remove the function body and the return keyword
const simpleSum = (a, b) => a + b;

const sum = (a) => (b) => (c) => a + b + c;

// console.log(sum(1)(2)(3));

// const sum = (a) => (b) => (c) => a + b + c;

// closure

function outerFn() {
  let privateVar = "I am a private variable";
  return function innerFn() {
    console.log(privateVar);
  };
}

// outerFn()();

// function baz() {
//   const hugeObject = {
//     name: "Joe",
//     age: 25,
//     address: {
//       street: "123 main st",
//       city: "New York",
//     },
//     sayHi: () => {
//       console.log("Hi");
//     },
//   };
//   console.log("hugeObject", hugeObject);
// }

// baz();

//   const counterFn = () => {
//     let count = 0;

//     return {
//       add: () => count++,
//       minus: () => count--,
//       reset: () => {
//         count = 0;
//       },
//       getCount: () => count,
//     };
//   };

//   // const counter = counterFn();
//   // counter.add();
//   // console.log(counter.getCount());
//   // counter.minus();
//   // console.log(counter.getCount());

//   const drawLotto = () => {
//     if (Math.random() > 0.9) {
//       console.log("You won the lotto!");
//     } else {
//       console.log("Better luck next time!");
//     }
//   };

//   // an example of higher order function
//   const limiterFn = (callbackFn, limit = 3) => {
//     let count = 0;

//     return () => {
//       if (count >= limit) {
//         console.log("You have reached the limit");
//         return;
//       }
//       callbackFn();
//       count++;
//       // console.log("count:", count);
//     };
//   };

//   const limitedLotto = limiterFn(drawLotto);

//   // const sayHi = limiterFn(() => console.log("hi"));
//   // for (let i = 0; i < 10; i++) {
//   //   sayHi();
//   // }

//   document.getElementById("lotto").addEventListener("click", () => {
//     limitedLotto();
//   });

//   document.getElementById("input").addEventListener("input", (e) => {
//     // can be optimized using debounce function
//     console.log(e.target.value);
//   });

// const groceries = [
//   { id: 173, name: "Soup" },
//   { id: 964, name: "Apple" },
//   { id: 535, name: "Cheese" }
// ];

// /** With filter and map */
// var names = groceries
//   .filter(item => item.id > 500)
//   .map(item => item.name)

// /** With reduce */
// var names = groceries.reduce((accumulator, val) => {
//   if (val.id > 500) {
//     accumulator.push(val.name);
//   }
//   return accumulator;
// }, []);

// console.log(names); // ["Apple", "Cheese"]

// accumulator => {
//   if (val.id > 500) {
//     accumulator.push(val.name);
//   }
//   return accumulator}

// function fun1(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       reject('404')
//     }, 100)
//   })
// }
// function fun2(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve('emoji')
//     }, 100)
//   })
// }

// function onSuccess(data){
//   console.log(data)
// }

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`);
}

// fun1()
// .then(fun2, onError)

function fetchData() {
  return new Promise(function (resolve, reject) {
    fetch("http://api.weather.gov/gridpoints/OKX/35,35/forecast")
      .then((response) => response.json())
      .then((data) => {
        resolve(data.properties.periods[1].shortForecast);
      })
  });
}

function displayData(weather) {
  console.log(`the weather is ${weather}`);
}

fetchData()
  .then(displayData)
  .catch(onError);
console.log(fetchData);
console.log(fetchData());


$( "button.continue" ).html( "Next Step..." )