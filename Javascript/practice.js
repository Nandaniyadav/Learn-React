//  *
//  **
//  ***
//  ****
//  *****
// for (let i = 1; i <= 5; i++) {
//   let star = " ";
//   for (let j = 1; j <= i; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }
////////////////////////
// *****
// *****
// *****
// *****
// *****
// for (let i = 1; i <= 5; i++) {
//   let star = " ";
//   for (let j = 1; j <= 5; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

//////////////////

// *****
// *   *
// *****

// for (let i = 0; i < 3; i++) {
//   let star = " ";
//   for (let j = 0; j < 5; j++) {
//     if(i==1){
//         star = star + "*";
//     }else{
//         console.log("9")
//     }
// }
//   console.log(star);
// }

// "cat".charAt(1); // gives value "a"

let product = {
    name:"laptop",
    price:50000,
    arr:["ram","seeta"],
    myarr:function(){
        return this.arr;
    }
}
console.log(product.myarr())
