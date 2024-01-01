const cerKey: ICerKey = {
    key1: 'PublicKey',
    key2: 'APIKey',
}

interface ICerKey {
    key1: string,
    key2: string
}

interface IGenericCerKey<K=string, V=number> {
    key1: K,
    key2: V
} 

const cerKey1: IGenericCerKey<String, String> = {
    key1: 'PublicKey',
    key2: 'APIKey',
}

const cerKey2: IGenericCerKey<string, number> = {
    key1: 'PublicKey',
    key2: 24698246234,
}

interface ISecret<T> {
    secret: T
}

const cerKey3: IGenericCerKey<ISecret<string>, string[]> = {
    key1: {
        secret: 'PublicKey'
    },
    key2: ['k1','k2'],
}

const cerKey4: IGenericCerKey = {
    key1: 'PublicKey',
    key2: 12343,
}


function getFirstRecord<T>(arr: T[]): T {
    return arr[0];
}

getFirstRecord<number>([1,2,3,4]);
const stringData: string = getFirstRecord<string>(['a','b', 'c', 'd']);
getFirstRecord([[1,2], [3, 4], [4, 5]]);
getFirstRecord([{a: 1}, {a: 2}, {a: 3}]);


interface IPersonDetail {
    name: string
}

function getName<T extends IPersonDetail>(obj: T) {
    return obj.name;
}

getName({
    name: 'Manisha',
    city: 'Bangalore'
})

getName({
    name: 'Sanjay',
    address: 'Delhi',
    company: 'XYZ'
})

getName({
    name: "",
    firstName: 'Malyaj',
    lastName: 'Singh'
})