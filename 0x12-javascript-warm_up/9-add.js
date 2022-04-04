#!/usr/bin/node
// File: 9-add.js
// By: Imanol Asolo (CodeCodix)
function add (a, b) {
  return a + b;
}

console.log(add(Number(process.argv[2]), Number(process.argv[3])));
