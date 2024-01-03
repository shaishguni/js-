function triangletypes(side1,side2,side3){
    if ((side1==side2)&&(side1==side3)){
        console.log('Equilateral Triange')
    } else if ((side1 == side2) || (side2 == side3)){
        console.log(`Isosceles triangle.`)
      }
      else{
        console.log(`Scalene triangle.`)
      }
    }
    
    findTriangleType(12,12,12) //"Equilateral triangle."
    findTriangleType(25,20,31) //"Isosceles triangle."
    findTriangleType(5,4,3) //"Scalene triangle."

