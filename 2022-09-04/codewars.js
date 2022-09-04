// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
// The returned value must be a string, and have "***" between each of its letters.
//
// You should not remove or add elements from/to the array.
//


function twoSort(s) {
  let str = ""
  let sorted = s.sort()
  for(let i = 0; i < sorted[0].length; i++){
    str += `${sorted[0][i]}***`
  }
  return str.slice(0,-3)
}
