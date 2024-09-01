//find the mine (the number 1) and return its location as [2,1] - [[0,0,0],[0,0,0],[0,1,0]];

function mineLocation(field){
    for(let i = 0; i < field.length; i++){
      for(let j = 0; j<=field[i].length; j++){
        if(field[i][j]==1){
          return [i,j];
        }
      }
    }
  }