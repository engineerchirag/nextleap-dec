type Circle = {
    radius: number
}

type Rectangle = {
    l: number,
    b: number,
}

type Square = {
    size: number
}

// 1. type or interface?
// 2. shape can be any of Circle, Rectangle, Square

type Shape = Circle | Rectangle | Square;

const shape1: Shape = {
    radius: 20
}