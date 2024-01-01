
// console.log(sum(1,2)); // A. 3
// console.log(sum1(1,2)); // B. Error

// Named function
function sum(a: number | string, b: number | string, c: number | string=0): number {  // Function Hoisting 
    return Number(a) + Number(b) + Number(c);
}

sum('1', '2', 3);

// Anonymous Function
var sum1 = function(a, b) { // Are used as callback
    return a + b;
}

// Arrow function
var sum2 = (a, b) => { // Shorthand and different in this
    return a + b;
}

function total(...args: number[]): number {
    let agregate = 0;
    // for loop to get sum
    return agregate;
}

total(1,2,5,3,10);
