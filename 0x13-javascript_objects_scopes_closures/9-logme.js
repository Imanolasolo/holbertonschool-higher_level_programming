#!/usr/bin/node
// File: 9-logme.js
// By: Imanol Asolo (CodeCodix)
let count = 0;
exports.logMe = function (item) { console.log(`${count++}: ${item}`); };
