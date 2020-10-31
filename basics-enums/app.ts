// ENUMS

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON};

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {title: 'The book'}
}


const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.AUTHOR,
    data: {name: 'John'}
}

console.log(docOne, docTwo)



