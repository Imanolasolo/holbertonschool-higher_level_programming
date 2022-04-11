#!/usr/bin/node
// File: 0-readme.js
// By: Imanol Asolo (CodeCodix)
const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (error, content) {
  console.log(error || content);
});
