"use strict";
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
var docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'The book' }
};
var docTwo = {
    uid: 10,
    resourceType: ResourceType.AUTHOR,
    data: { name: 'John' }
};
console.log(docOne, docTwo);
