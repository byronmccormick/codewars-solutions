// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
  let arr = str.split(' ');
  for(let i = 0; i < arr.length; i++){
    let word = arr[i];
    if(letters.includes(word[0]) && letters.includes(word[word.length-1])){
      word=word.substr(1)+word[0]+"ay"
      arr[i]=word;
    }
  }
  return arr.join(" ")
}