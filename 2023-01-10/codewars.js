// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.
function largestPairSum (numbers) {
    let num1 = Math.max(...numbers)
    numbers.splice(numbers.indexOf(num1),1)
    let num2 = Math.max(...numbers)
    return num1 + num2
  }