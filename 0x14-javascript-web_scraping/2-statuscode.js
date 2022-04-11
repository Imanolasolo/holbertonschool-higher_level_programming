#!/usr/bin/node
// File: 2-statuscode.js
// By: Imanol Asolo (CodeCodix)
const request = require('request');
request.get(process.argv[2]).on('response', function (response) {
  console.log(`code: ${response.statusCode}`);
});
