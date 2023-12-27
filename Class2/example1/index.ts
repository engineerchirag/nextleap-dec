const person: IPerson = {
    firstName: "Malyaj",
    age: 24,
    address: {
        city: "Bangalore",
        pincode: 560067,
    }
}

type Person = {
    firstName: string,
    age: number,
    address: {
        city: string,
        pincode: number,
    }
}

// type or interface

interface IPerson {
    firstName: string,
    age: number,
    address: IAddress
}

interface IAddress {
    city: string,
    pincode: Pincode,
    country?: string,
}

const address: IAddress = person.address;



console.log(person.address.city);

// Interface: Object
// Type: Primitive (string, number, boolean)


let pincode: Pincode  =  "560067"; // 560067


type Pincode = number | string | undefined; // OR in types // Interface: No

type PrintedProduct = {
    name: string,
    id: string,
    description: string,
    material: string
}

type DigitalProduct = {
    name: string,
    id: string,
    description: string,
    platform: string[]
}

type Product = PrintedProduct & DigitalProduct;  // Interface: No

const product: Product = {
    name: "XYZ",
    id: "123",
    description: "This is new product",
    material: "ABC",
    platform: ["AMAZON"]
}

// Inheritance


interface IProduct {
    name: string,
    id: string,
    description: string,
}

interface IPrintedProduct extends IProduct{
    material: string
}

interface IDigitalProduct extends IProduct{
    platform: string[]
}

const product2: IPrintedProduct = {
    name: "XYZ",
    id: "123",
    description: "This is new product",
    material: "ABC",
}

const product3: IDigitalProduct = {
    name: "XYZ",
    id: "123",
    description: "This is new product",
    platform: ["FLIPKART"],
}
