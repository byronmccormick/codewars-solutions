// Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let caps = string.toUpperCase().split('')
    let arr = string.split('')
    let t = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === caps[i]){
       arr.splice(i,0,' ')
       caps.splice(i,0,' ')
       i = i+2
      }
    }
  return arr.join('')
}
