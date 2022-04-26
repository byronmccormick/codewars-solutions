//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(str) {
  //Why does this not work?
  //return str.replaceall('!', '')
  let arr = str.split('')
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '!'){
      arr.splice(i,1)
      i--
    }
  }
  return arr.join('')
}
