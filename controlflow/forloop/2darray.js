function printArray(arr) {
    for (let i=0;i<arr.length;i++){
      for(let j=0;j<arr[0].length;j++){
        console.log(arr[i][j]);
      }   
    }
  }
  var arr = [[1, 2],
             [3, 4],
             [5, 6]];
  
  printArray(arr) 