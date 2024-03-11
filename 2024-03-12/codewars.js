// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
    const result = [];
    const seenLetters = [];
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      if (!seenLetters.includes(letter)) {
        const count = text.split(letter).length - 1;
        result.push([letter, count]);
        seenLetters.push(letter);
      }
    }
    return result;
  };