// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
    for(let i = 0,j=array.length-1; i<array.length/2;i++,j--){
      let pos1=array[i];
      let posend=array[j];
      array[i]=posend;
      array[j]=pos1;
    }
    return array
  }