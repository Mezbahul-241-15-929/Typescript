"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Narrowing & Type Guards
function getnum(kind) {
    if (typeof kind === "string") {
        return `The number is ${kind}`;
    }
    return `The number is: ${kind}`;
}
function message(msg) {
    if (msg) {
        return `Message is ${msg}`;
    }
    return `There is no message`;
}
function orderCha(size) {
    if (size === "small") {
        return `Cha size is small`;
    }
    if (size === "medium" || size === "large") {
        return `Extra cha size`;
    }
    return `Cha size ${size}`;
}
// .........................class
class message1 {
    send() {
        return `This is message 1`;
    }
}
class message2 {
    send() {
        return `This is message 2`;
    }
}
function send(msg) {
    if (msg instanceof message1) {
        return msg.send();
    }
}
function isOrder(obj) {
    return (typeof obj === "object" && obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isOrder(item)) {
        return `Serving ${item.type} cha with ${item.sugar}`;
    }
    return `Serving custom cha: ${item}`;
}
function MakeCah(order) {
    switch (order.type) {
        case "masala":
            return `Masala cha`;
            break;
        case "elaichi":
            return `Elaichi cha`;
            break;
        case "ginger":
            return `Ginger cha`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
// Example
function isStringArray(arr) {
    return (Array.isArray(arr) &&
        arr.every(item => typeof item === "string"));
}
//# sourceMappingURL=typeNarrowing.js.map