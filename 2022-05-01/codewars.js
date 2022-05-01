//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.


function createPhoneNumber(numbers){
  let str = "("
  for(let i = 0; i < numbers.length; i++){
    if (i === 3){
      str += ") "
    }else if (i === 6){
      str += "-"
      }

    str += numbers[i]
  }
  return str
}
