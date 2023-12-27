const person11 = {
    firstName: "Malyaj",
    age: 24,
    address: {
        city: "Bangalore",
        pincode: 560067,
    }
}

const pincode10 = person11.address.pincode as unknown as string;