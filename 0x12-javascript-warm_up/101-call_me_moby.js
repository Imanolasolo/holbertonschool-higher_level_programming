#!/usr/bin/node
// File: 101-call_me_moby.js
// By: Imanol Asolo (CodeCodix)
exports.callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) theFunction();
};
