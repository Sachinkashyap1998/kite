

// let a=5
// let b =7
// for(let i=1; i<=4; i++){
//     let stars = ''
//     for(let j=1; j<=i; j++){
//         stars += a+' '
//         let c = a+b;
//         a=b;
//         b=c;
//     }
//     console.log(stars)
// }

// for(let i=5; i>=1; i--){
//     let stars =''
//     let k =  i;
//     for(let j=5; j>=1; j--){
//         stars += k +' '
//         k = k+ 5;
//     }
//     console.log(stars)
// }



// function digit(num){
//     let fact = 1;
//     for(let i= 1; i<=num; i++){
//       fact = fact * i
//     }
//   return fact
//   }
//   console.log(digit(5))                              //>>>>>>>>>>>120
  



//   function facto(num){
//     fact = 1
//   while(num != 0){
//     fact = fact *  num
//     num--;
      
//     }
//     return fact;
//   }
//       console.log(facto(6))                         //  >>>>>>>>>>  720










let space = 6;
for(let i=1; i<=4; i++){
    
    let stars= ''
    for(let j=1; j<=i; j++){
        //if(j==2 || j==3 || j==6 || j==7  ){
       
        stars += '8 '
 
        }
        for(let j=1; j<=space; j++){
            
           
            stars += '  '
     
            }
            for(let j=1; j<=i; j++){
                
                stars += '8 '
         
        
            }
            space = space - 2;
        console.log(stars)

}
    






