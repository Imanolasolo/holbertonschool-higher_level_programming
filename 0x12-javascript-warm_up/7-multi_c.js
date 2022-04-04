#!/usr/bin/node
// File: 7-multi_c.js
// By: Imanol Asolo (CodeCodix)
const x = Math.floor(Number(process.argv[2]));
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
