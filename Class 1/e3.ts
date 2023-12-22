function printData(condition: boolean, data: string) {
    if (condition) {
        console.log(data);
    }
}

console.log(printData(true, 'Hello World!'));
console.log(printData(false, 'Bye bye!'));
// console.log(printData('false', 'Moye moye!'));
console.log(printData(true, 'Fixed it!'));