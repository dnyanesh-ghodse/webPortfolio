// let a = 0;
// let b = 1;
// let c;
// for(let i = 0; i< 10; i++){
//     let c = a + b;
//     console.log(c);
//     [a,b] = [b,c]
// }

// 012345678910
let lm  = function l(arr){
    arr.sort((a,b) => {
        return a.length - b.length;
    })

    return arr[arr.length -1];
}
console.log(lm(['apple','elon','spacex','neuralink']))
