// Generics
// const addUId = <T>(obj: T) => {
// const addUId = <T extends object>(obj: T) => {
const addUId = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUId({name: 'John Doe', age: 50});
// let docTwo = addUId('Hello'); // givs error as addUId needs an object with name property
console.log(docOne.name);



// Generics with interface
interface Resources<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resources<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'Jill Doe'
}


const docFour: Resources<string[]> = {
    uid: 1,
    resourceName: 'person',
    data: ['Jill Doe']
}

console.log(docThree, docFour)