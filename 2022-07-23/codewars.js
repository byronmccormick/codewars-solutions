// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
// Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//
// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


function mxdiflg(a1, a2) {
  if(a1.length == 0 || a2.length == 0){
    return -1
  }else{
     a1 = a1.map(item => item.length)
  a2 = a2.map(item => item.length)
  let sortedA1 = a1.sort((a,b)=>a-b)
  let sortedA2 = a2.sort((a,b)=>a-b)
  return Math.abs(sortedA1[0] - sortedA2[sortedA2.length-1]) > Math.abs(sortedA2[0] - sortedA1[sortedA1.length-1]) ? Math.abs(sortedA1[0] - sortedA2[sortedA2.length-1]) : Math.abs(sortedA2[0] - sortedA1[sortedA1.length-1])
  }
  a1 = a1.map(item => item.length)
  a2 = a2.map(item => item.length)
  let sortedA1 = a1.sort((a,b)=>a-b)
  let sortedA2 = a2.sort((a,b)=>a-b)
  return Math.abs(sortedA1[0] - sortedA2[sortedA2.length-1]) > Math.abs(sortedA2[0] - sortedA1[sortedA1.length-1]) ? Math.abs(sortedA1[0] - sortedA2[sortedA2.length-1]) : Math.abs(sortedA2[0] - sortedA1[sortedA1.length-1])
}
