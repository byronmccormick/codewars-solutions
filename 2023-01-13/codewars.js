// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x){
    let nums = 0
    let strNums = 0
    for(let i = 0; i < x.length; i++){
      if(typeof x[i] == 'number'){
        nums+=x[i]
      }else{
        strNums = eval(`${strNums}+${x[i]}`)
      }
    }
    return nums-strNums
  }