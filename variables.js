var name = "Joe";
var age = 29;
var state = "Tx";

// FUNCTION
var printName = function (name) {
  return name;
};

// Use this to export Variables to index.js
// ES6 VERSION BELOW
module.exports = {
  name,
  age,
  state,
  printName,
};
