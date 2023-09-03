// Declare an empty array;
// Declare an array with more than 5 number of elements
// Find the length of your array
// Get the first item, the middle item and the last item of the array
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

import { itCompanies } from './data.js';

// Declare an empty array;
let arr = [];

let arr5 = [1,2,3,4,5,6];

let length = arr5.length;

let mixedDataTypes = ['test', 90, 9.89, 'r', 'tester', 0];

let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

console.log(itCompanies);

console.log(itCompanies[0], itCompanies[itCompanies.length/2], itCompanies[itCompanies.length-1]);

itCompanies.forEach((company) => {console.log(company)});

itCompanies.map((company) => {
    company = company[0].toUpperCase() + company.slice(1);
    console.log(company);
})

let output = names.join(', ') + "are big IT companies";

// These all seem quite easy, I will move on to Day 2: Intro to React