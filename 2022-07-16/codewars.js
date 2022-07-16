// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let newStr = s1.concat(s2).split('')
  let newArr = newStr.sort()
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] == newArr[i+1]){
      newArr.splice(i+1,1)
      i--
    }
  }
  return newArr.join('')
}
