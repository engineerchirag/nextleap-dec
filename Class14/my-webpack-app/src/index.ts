import './index.css';

if (!Array.prototype.map) {
    Array.prototype.map = function(cb: Function) {
        let arr = this;
        const newArr = []
        for (var i = 0; i < arr.length; i++) {
            newArr.push(cb.call(this, this[i], i));
        }
        return newArr;
    }
}

export const sum = (a: number, b: number) => {
    return a + b;
}

const subtract = (a: number, b: number) => {
    return a - b;
}

var obj: any = {};
console.log(obj?.data);

var arr = [1,2];
console.log([...arr]);

console.log("Hello from Webpack! -- Chirag Goel");
console.log(sum);


const doubledValue = arr.map((item, idx) => {
    return 2 * item;
});
console.log(doubledValue);