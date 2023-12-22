function sum(a: number, b: number = 0, c: number = 0): number {
    return a + b + c;
}

console.log(sum(1, 2));
console.log(sum(4, 5));
console.log(sum(5, 10)); 
console.log(sum(5, 6));
console.log(sum(1, 2));
console.log(sum(1));
console.log(sum(1, 2, 3));

const total1: number = sum(10, 30);