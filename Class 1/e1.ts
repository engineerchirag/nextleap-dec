let total:number = 0;
total = 15;

let fullName: string = 'Alankrit Khatri';
let company: string = 'XYZ';
let age: number = 18;
let techStack: string[] = ['HTML', 'CSS', 'JS' , 'TypeScript'];
let isMarried: boolean = false;

let address: Address = {
    city: 'Bangalore',
    pincode: 560067
};

// type | interface

type Address = {
    city: string,
    pincode: number
}

// address.city = 'New Delhi';
// address.pincode = 110003;
// address.country = 'India';
// address = {
//     country: 'US'
// };

// delete address.pincode;


let creator: string | undefined | null;

creator = 'Malyaj';
creator = undefined;
creator = null;

let education: Education = {
    college: 'NIT',
    city: 'Bangalore',
    pincode: 560067,
}

type Education =  {
    college: string,
    city: string,
    pincode: number,
    degree?: string
}

// Avoid using any
let salary: any = '2 crore';
salary = [];
salary = {};
salary = false;


enum GENDER {
    MALE='MALE',
    FEMALE='FEMALE',
    OTHER='OTHER'
}

let gender:GENDER = GENDER.MALE;
gender = GENDER.FEMALE;





