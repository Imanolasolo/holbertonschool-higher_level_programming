#!/usr/bin/node
// File: 102-concat.js
// By: Imanol Asolo (CodeCodix)
const fs = require('fs');
const a = fs.readFileSync(process.argv[2], 'utf8');
const b = fs.readFileSync(process.argv[3], 'utf8');
fs.writeFileSync(process.argv[4], a + b);
