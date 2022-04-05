#!/usr/bin/node
// File: File: 100-map.js
// By: Imanol Asolo
const list = require('./100-data.js').list;
console.log(list);
console.log(list.map((item, index) => item * index));
