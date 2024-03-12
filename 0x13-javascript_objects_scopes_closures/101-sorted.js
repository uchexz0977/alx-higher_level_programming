#!/usr/bin/node

const { dict } = require('./101-data');

// Create an empty object to store the new dictionary
const occurrencesDict = {};

// Iterate over the keys (user ids) of the original dictionary
for (const userId in dict) {
    // Get the number of occurrences for the current user id
    const occurrences = dict[userId];
    
    // If the occurrences is not already a key in the new dictionary, create an empty array as its value
    if (!occurrencesDict[occurrences]) {
        occurrencesDict[occurrences] = [];
    }
    
    // Add the current user id to the array corresponding to its number of occurrences
    occurrencesDict[occurrences].push(userId);
}

// Print the new dictionary
console.log(occurrencesDict);

