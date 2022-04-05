#!/usr/bin/node
// File: 7-occurrences.js
// By: Imanol Asolo (CodeCodix)
exports.nbOccurences = function (list, searchElement) {
  return list.reduce((count, current) => current === searchElement ? count + 1 : count, 0);
};
