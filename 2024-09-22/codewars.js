// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

function toNato(words) {
    let map={
      a: "Alfa",
      b: "Bravo",
      c: "Charlie",
      d: "Delta",
      e: "Echo",
      f: "Foxtrot",
      g: "Golf",
      h: "Hotel",
      i: "India",
      j: "Juliett",
      k: "Kilo",
      l: "Lima",
      m: "Mike",
      n: "November",
      o: "Oscar",
      p: "Papa",
      q: "Quebec",
      r: "Romeo",
      s: "Sierra",
      t: "Tango",
      u: "Uniform",
      v: "Victor",
      w: "Whiskey",
      x: "Xray",
      y: "Yankee",
      z: "Zulu",
    }
    let result=[];
    words=words.toLowerCase();
    let arr = words.split("");
    for(let i = 0; i<arr.length; i++){
      if(arr[i] in map){
        result.push(map[arr[i]]);
      }
      if(arr[i]=="!" || arr[i]=="." || arr[i]=="," || arr[i]=="?"){
        result.push(`${arr[i]}`);
      }
    }
  return result.join(" ")

