#!/usr/bin/node
// File: 3-rectangle.js
// By: Imanol Asolo (CodeCodix)
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) { [this.width, this.height] = [w, h]; }
  }

  print () {
    for (let i = 0; i < this.height; i++) console.log('X'.repeat(this.width));
  }
};
