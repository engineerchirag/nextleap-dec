// Readonly
type Readonly<T> = {
    readonly [P in keyof T]: T[P] 
}

interface IPerson {
    name: string,
    city?: string,
    pincode: number
}

const AkhilDetail: Readonly<IPerson> = {
    name: 'Akhil',
    city: 'Bangalore',
    pincode: 560067
}

AkhilDetail.city = "Delhi";


// Partial
type Partial<T> = {
    [P in keyof T]?: T[P] 
}

const ChetanaDetail: Partial<IPerson> = {
    name: 'Chentana'
}

// Required
type Required<T> = {
    [P in keyof T]-?: T[P] 
}

const AkanshaDetail: Required<IPerson> = {
    name: 'Akansha',
    city: 'Bangalore',
    pincode: 560067
}

// Pick
type IPersonDetail1 = Pick<IPerson, 'name' | 'city'>


const AkanshaDetai2: IPersonDetail1 = {
    name: 'Akansha',
    city: 'Bangalore'
}

// Omit
type IpersonDetail2 = Omit<IPerson, 'name'>;

const AkanshaDetail3: IpersonDetail2 = {
    city: 'Bangalore',
    pincode: 560067
}