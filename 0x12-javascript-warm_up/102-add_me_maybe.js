#!/usr/bin/node
// File: 102-add_me_maybe.js
// Imanol Asolo (CodeCodix)
exports.addMeMaybe = function (number, theFunction) {
  theFunction(++number);
};
