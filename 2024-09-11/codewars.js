

function encode(string) {
    let nums={
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5'
    }
    return string.split("").map((letter) => letter in nums ? nums[letter] : letter).join("");
  }
  
  function decode(string) {
    let nums={
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u'
    }
    return string.split("").map((letter) => letter in nums ? nums[letter] : letter).join("");
  }