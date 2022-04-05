#!/usr/bin/node
// File: 8-esrever.js
// By: Imanol Asolo (CodeCodix)
exports.esrever = function (list) {
  return list.reduceRight(function (array, current) {
    array.push(current);
    return array;
  }, []);
};
