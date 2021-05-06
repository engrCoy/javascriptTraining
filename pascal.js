let pascal = function (size) {
    let pascalT = [];
    for (let i = 0; i < size; i++) {
        
        let curr = [];
        var prev;
        
        for (let j = 0; j <= i; j++) {

            if (j == 0 || j == i) {
                curr.push(1);
            } else {
                // console.log(prev);
                curr.push(prev[j-1]+prev[j]);
            }
        }
        pascalT.push(curr);
        console.log(curr)
        prev = curr;
        // console.log(curr);
        
    }
    
    return pascalT;
}

console.log(pascal(5));

// to be continued

// let pascal = function (size) {
//     let tri = [];
//     for (let i = 1; i <= size; i++) {
//         // let triPrev = tri[i-1];
//         // let triCurr = [];
//         for (let j = 0; j < i; j++) {
//             let arr = [];
//             if (j == 0 || j == i-1) {
//                 tri.push(1);
//             } else {
//                 let triPrev = tri[j];
                
//                 // console.log(triPrev);
//                 tri.push(2);

//             }
//             //  tri = triCurr;
            
//         }
        
//        console.log(tri);
//        tri = [];

//     }
// }

// pascal(5);