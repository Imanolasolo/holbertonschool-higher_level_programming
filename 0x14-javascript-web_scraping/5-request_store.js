#!/usr/bin/node
// File: 5-request_store.js
// By: Imanol Asolo (CodeCodix)
const fs = require('fs');
const request = require('request');
request(process.argv[2]).pipe(fs.createWriteStream(process.argv[3]));
