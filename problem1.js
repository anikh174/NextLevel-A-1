// Question 1: Value Detective · 10 marks
// Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space:

// <type of the value> | <truthy or falsy>
// Examples:

// Call	Returns
// describeValue("hello")	"string | truthy"
// describeValue("")	"string | falsy"
// describeValue(25)	"number | truthy"
// describeValue(0)	"number | falsy"
// describeValue(true)	"boolean | truthy"
// describeValue(null)	"object | falsy"
// describeValue(undefined)	"undefined | falsy"
// Watch out for these three. Think before you answer:

// describeValue("0") — a string that looks like zero
// describeValue(NaN) — what does typeof NaN give?
// describeValue(null) — remember the strange thing we saw in class
// Hint: you do not need a long if chain to find the type. typeof gives it to you. And a value can be put straight inside an if to test truthy or falsy.

function describeValue(value) {
  const type = typeof value;
  const values = value ? "truthy" : "falsy";
  return `${type} | ${values}`;
}
console.log(describeValue(NaN))