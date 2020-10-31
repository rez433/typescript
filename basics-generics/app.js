"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Generics
// const addUId = <T>(obj: T) => {
// const addUId = <T extends object>(obj: T) => {
var addUId = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUId({ name: 'John Doe', age: 50 });
// let docTwo = addUId('Hello'); // givs error as addUId needs an object with name property
console.log(docOne.name);
var docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'Jill Doe'
};
var docFour = {
    uid: 1,
    resourceName: 'person',
    data: ['Jill Doe']
};
console.log(docThree, docFour);
