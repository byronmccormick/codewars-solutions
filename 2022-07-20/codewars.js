//challenge

function persistence(num) {
   let count = 0
   for(let i = 0; num > 9; i++){
     num=num.toString().split('')
     num = num.reduce((a,b) => a * b)
     count++
   }
  return count
}
