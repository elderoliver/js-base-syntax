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

// Destructuring objects
const { name } = restaurant;
const { name: restaurantName } = restaurant;
console.log(name);
console.log(restaurantName);

//Declaring default values for objects
const { menuV = ["item does not exist in the object"], name: restName } =
  restaurant;

console.log(menuV, restName);

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

//The Spread operator
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
//Destructuring arrays


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
