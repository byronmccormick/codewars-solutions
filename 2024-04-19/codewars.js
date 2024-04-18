// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    for(let i = 0; i < string.length; i++)
      {
        if(string[i]===string[i].toUpperCase())
        {
          string=string.slice(0,i)+" "+string.slice(i)
          i++
        }
      }
    return string
  }