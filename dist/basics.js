"use strict";
console.log("Your code goes on here...");
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phrase = "Result is:";
const result = add(number1, number2, printResult, phrase);
console.log(result);
/** Trying the document */
let helloworld = "Hello world";
let user1 = {
    name: "Hayes",
    id: 0,
};
let user2 = {
    name: "Hayes",
    id: 0
};
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
let unknownValue;
let velocity = "getthis";
let anyValue = 32;
unknownValue = 5;
unknownValue = "Hello";
unknownValue = { name: "lohitha" };
unknownValue = velocity;
//velocity = unknownValue // this is not possible unknown value s not assignable to the string
velocity = anyValue;
function sendAnalytics(data) {
    console.log(`data`, data);
}
sendAnalytics("string");
//# sourceMappingURL=basics.js.map