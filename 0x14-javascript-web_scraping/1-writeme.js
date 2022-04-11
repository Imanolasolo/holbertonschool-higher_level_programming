#!/usr/bin/node
// File: 1-writeme.js
// By: Imanol Asolo (CodeCodix)
const fs = require('fs');
fs.writeFile(process.argv[2], process.argv[3], error => {
  if (error) console.log(error);
});
