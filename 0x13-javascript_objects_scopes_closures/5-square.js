#!/usr/bin/node
// File: 5-square.js
// By: Imanol Asolo (CodeCodix)
module.exports = class Square extends require('./4-rectangle.js') {
  constructor (size) {
    super(size, size);
  }
};
