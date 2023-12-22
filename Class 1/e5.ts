function isPostiveNumber(num: number): string {
    if (num > 0) {
        return 'Positive Number';
    }
    if (num < 0) {
        return 'Negative Number';
    }

    return 'Is neither postive or negative';
}

console.log(isPostiveNumber(20));
console.log(isPostiveNumber(-20));
console.log(isPostiveNumber(-10));
console.log(isPostiveNumber(0));

function passportChecker (age: number, lastName: string): string {
    if (age < 18) {
        return 'Not Valid'
    } else {
        if(!lastName) {
            return 'Not Valid'
        } else {
            return 'Valid'
        }
    }
}

console.log(passportChecker(17, ''));
console.log(passportChecker(16, 'Singh'));
console.log(passportChecker(20, 'Karka'));