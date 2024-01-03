// function countdown(n){
//     if (n <=0){
//         console.log('lol ')
//         return

//     }

//    console.log(n)
//    countdown(n-1)
   
// }
// countdown(35)

function firsttolast(n){
    if (n <= 0){
        console.log('haha')
        return
    
    }
    console.log(n)
    
    firsttolast(n-1)
}


firsttolast(15)