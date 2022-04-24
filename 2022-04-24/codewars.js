//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase()
}

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
//
// Give your answer as a string matching "odd" or "even".
//
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial % 2 === 0 ? "even" : "odd"
}
