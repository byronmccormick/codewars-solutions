//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  if(input === null || input. length === 0){return []}
  let i = 0
  let total = 0
  input.forEach(element => {
      if(element > 0){
        i++
      }else{
       total = total + element
      }
    })
  return [i,total]
}
