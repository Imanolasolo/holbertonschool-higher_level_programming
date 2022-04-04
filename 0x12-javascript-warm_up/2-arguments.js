#!/usr/bin/node
// File: 2-arguments.js
// By: Imanol Asolo (CodeCodix)
const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
