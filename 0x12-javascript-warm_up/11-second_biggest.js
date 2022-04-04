#!/usr/bin/node
// File: 11-second_biggest.js
// By: Imanol Asolo (CodeCodix)
if (process.argv.length <= 3) {
  console.log(0);
} else {
  const args = process.argv.map(Number)
    .slice(2, process.argv.length)
    .sort((a, b) => a - b);
  console.log(args[args.length - 2]);
}
