// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  str = str.toUpperCase()
  for(let i = 0; i < str.length; i++){
   for(let t = i+1; t < str.length; t++){
     if(str[i] === str[t]){
       return false
     }
   }
  }
  return true
}
