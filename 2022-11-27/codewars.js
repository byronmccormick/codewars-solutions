// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
    let arr = s.split('')
    let str1 = ""
    let str2 = s[0]
    for(let i = 0, l = 0; i < arr.length; i++){
      l++
      if(arr[i] != undefined){str1+=arr[i].toUpperCase()}
      if(arr[l] != undefined){str2+=arr[l].toUpperCase()}
      i++
      l++
      if(arr[i] != undefined){str1+= arr[i]}
      if(arr[l] != undefined){str2+= arr[l]}
    }
    return [str1,str2]
  };