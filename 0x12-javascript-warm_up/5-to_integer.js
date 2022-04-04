#!/usr/bin/node
// File: 5-to_integer.js
// By: Imanol Asolo (CodeCodix)
const num = Math.floor(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
