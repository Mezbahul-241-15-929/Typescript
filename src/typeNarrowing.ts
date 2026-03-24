// Type Narrowing & Type Guards
function getnum(kind: string | number) {
    if (typeof kind === "string") {
        return `The number is ${kind}`;
    }
    return `The number is: ${kind}`;
}

function message(msg?: string) {
    if (msg) {
        return `Message is ${msg}`
    }
    return `There is no message`
}

function orderCha(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `Cha size is small`;
    }
    if (size === "medium" || size === "large") {
        return `Extra cha size`
    }
    return `Cha size ${size}`
}

// .........................class
class message1 {
    send() {
        return `This is message 1`
    }
}

class message2 {
    send() {
        return `This is message 2`
    }
}

function send(msg: message1 | message2) {
    if (msg instanceof message1) {
        return msg.send();
    }
}

// Type Guards
type Order = {
    type: string
    sugar: number
}

function isOrder(obj: any): obj is Order {
    return (
        typeof obj === "object" && obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number"
    )
}

function serveOrder(item: isOrder | string) {
    if (isOrder(item)) {
        return `Serving ${item.type} cha with ${item.sugar}`
    }
    return `Serving custom cha: ${item}`
}

// More Narrowing Example:
type MasalaCha = { type: "masala"; spicelevel: number };
type GingerCha = { type: "ginger"; amount: number };
type ElaichiCha = { type: "elaichi"; aroma: number };

type cha = MasalaCha | GingerCha | ElaichiCha;

function MakeCah(order: cha) {
    switch (order.type) {
        case "masala":
            return `Masala cha`
            break;
        case "elaichi":
            return `Elaichi cha`
            break;
        case "ginger":
            return `Ginger cha`
            break;

    }
}

function brew(order: MasalaCha | GingerCha) {
    if ("spicelevel" in order) {
        //
    }
}

// Example
function isStringArray(arr: unknown): arr is string[] {
    
}