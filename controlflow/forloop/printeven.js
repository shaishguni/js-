function printEven(arr) {
    for(let  i = 0; i<arr.length;i++){
        if (i%2==0){
            console.log(arr[i])
        }
    }
  }
  var arr = [13,23,12,45,22,48,66,100]
  
  printEven(arr) //12 22 48 66 100