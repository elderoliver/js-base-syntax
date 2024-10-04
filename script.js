"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log("Order Pasta method: ", ing1, ing2, ing3);
  },

  orderPizza: function (mainingredient, ...otherIngredients) {
    console.log(mainingredient, otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
 * Destructuring arrays
 */

/*
// Destructuring an array
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(b);

let [first, , third] = restaurant.categories;

console.log(first, third);

[third, first] = [first, third];

console.log(first, third);

const [starter, main] = restaurant.order(2, 0);

console.log(starter, main);

//Nested array
const [item1, , [item2, item3]] = [1, 2, [3, 4]];

console.log(item1, item2, item3);

//Setting Default values
const [q, w, r = "this item does not exist on the array"] = ["item1", "item2"];

console.log(q, w, r);

*/

/*
 * fin Destructuring arrays
 */

/*
 * Destructuring objects
 */
const { name } = restaurant;
const { name: restaurantName } = restaurant;
console.log(name);
console.log(restaurantName);

//Declaring default values for objects
const { menuV = ["item does not exist in the object"], name: restName } =
  restaurant;

console.log(menuV, restName);

/*
 * Fin Destructuring objects
 */

//mutating variables
let a = 111;
let b = 999;

const obj = { a: 24, b: 2, c: 55 };

({ a, b } = obj);

console.log(a, b);

//Nested Objects
const { openingHours } = restaurant;
const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

/*
 * The Spread operator
 */
//The Spread operator, it's on the right side
const arr = [7, 8, 9];
const newArray = [1, 2, ...arr];
console.log(newArray);

const newMenu = [...restaurant.mainMenu, "Hotdog"];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...mainMenuCopy, ...restaurant.starterMenu];

console.log(menu);

//Iterables are arrays, strings, maps, sets NOT OBJECTS
const str = "Elder";
const arrOfmyStr = [...str, " ", ..."Oliveira"];
console.log(arrOfmyStr);

const ingredients = ["ketchup", "mostarda", "salad"];
restaurant.orderPasta(...ingredients);

//spread operator with objects
//creating a brand new object
const otherRestaurante = { stars: 5, ...restaurant, founder: "Elder" };
console.log(otherRestaurante);

//THE BEST WAY TO COPY A OBJECT, USING THE SPREAD OPERATOR
const copyObject = { ...restaurant };
copyObject.name = "Atlanta pizza";
console.log(restaurant.name, copyObject.name);

/*
 * FIN Spread operator
 */

/*
 * The REST operator
 */
//REST because it's on the left side of the DESTRUCTURING STATEMENT
const [y, u, ...others] = [1, 2, 3, 4, 5, 6, 7, "8"];
console.log(y, u, others);

const { sat: saturday, ...weekDays } = openingHours;
console.log(saturday, weekDays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`The sum of the array is ${sum}!!!`);
};

add(1, 2, 3);
add(77, 88, 0, 88, 1, 2);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

/*
 *  FIN The REST operator
 */

/*
 *  SHORT CIRCUITING
 * Operators && AND || and ??
 */

const person = {
  fname: "Elder",
  lname: "Oliveira Castro",
  age: 33,
};

console.log(person);

// The OR operator will always return the first trueth value or simply the last value.
const soccerTeam = person.soccerTeam || "Atletico Mineiro";
console.log(soccerTeam);

// The and operator will always return the falsy value or simply the last value
console.log(undefined && "oliveira" && "Elder");

// The nullish operator works the same way as the OR, but considering null and undefined values instead of falsy values.
person.numberOfSuns = 0;
const numberOfSuns = person.numberOfSuns ?? "invalid";
console.log(numberOfSuns);

const life = {
  jobSkils: "Java, SQL, Delphi, C#",
  savedMoney: 1000000,
};

/*
 *  SHORT CIRCUITING - Logical Assignment Operators
 * Operators && AND || and ??
 */

//life.jobSkils = life.jobSkils || "nothing I have to study";
life.jobSkils ||= "nothing I have to study";
//life.savedMoney = life.savedMoney && "this property was hidden";
life.savedMoney &&= "this property was hidden";

console.log(life);

/*
 *  Looping arrays
 *
 */

//for of loop
const mainMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of mainMenu) console.log("Example of looping arrays  ", item);

//if I need to get the index of an array.
for (const item of mainMenu.entries()) console.log(item);

for (const [index, item] of mainMenu.entries()) console.log(index, item);

/*
 *  Enhanced Object Literals
 *
 */
const object1 = { key: "value" };

const example = {
  item1: "testing",
  object1,
  hello() {
    console.log("hello");
  },
};

console.log(example);

example.hello();

/*
 *  Optional chaining
 *
 */

//With Optional chaining I can verify if some property exist
//without having JS trowing an error
console.log(restaurant.openingHours.mon?.open);

const optionalChaining = {
  key1: "value1",
  hello: function hello() {
    return "Hello";
  },
};

console.log(optionalChaining.hello?.() ?? "This method does not exist");

//arrays
const users = [{ name: "elder", mail: "elder@test.com" }];

console.log(users[0]?.name);
console.log(users[1]?.name ?? `Name wasn't found`);

/*
 *  Looping Objects
 *
 */

//Looping trhogout the property names (keys)
for (const day of Object.keys(openingHours)) console.log(day);

//looping truhout the property values
//Looping trhogout the property names (keys)
for (const day of Object.values(openingHours)) console.log(day);

//If I want both data key and values I can use Object.entries(objectName)
for (const day of Object.entries(openingHours)) {
  console.log(day);
  console.log(day[1]);
}

/*
 *  Creating SETS
 *  SETS are a type of iterable which consists on a list of values
 *  that cannot be repeated
 */

const setTest = new Set(["Elder", "Thiago", "Celso", "Elder", "Thiago"]);

//setTest.clear();

setTest.add("Lucas");
//setTest.delete("Lucas");

console.log(`The size of the Set: ${setTest.size} `);
console.log(setTest.has("Elder") === true ? "Exist" : "Does not exist");

//Converting a set into a array
const newArrayBasedOnSet = [...setTest];

console.log(setTest);
console.log(newArrayBasedOnSet);

/*
 *  Creating MAPs
 *
 *
 */

const mapTest = new Map();

mapTest.set("name", "Elder").set(33, "age").set({ java: 5, sql: 5 }, "skills");

console.log(mapTest.get(33));
console.log(mapTest.size);
//mapTest.delete("name");

console.log(mapTest.has("name") === true ? "true" : "false");

console.log(mapTest);
