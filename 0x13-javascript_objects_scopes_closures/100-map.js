#!/usr/bin/node

const { list } = require('./100-data');

// Using map to create a new array where each element is equal to the value of the initial list multiplied by its index
const newList = list.map((value, index) => value * index);

// Print the initial list
console.log("Initial list:", list);

// Print the new list
console.log("New list:", newList);

