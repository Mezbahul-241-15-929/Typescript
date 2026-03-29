"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subscribes = 1000;
subscribes = "1000";
subscribes = 1000;
let apRequestStatus = "pending";
apRequestStatus = "success";
apRequestStatus = "pending";
// apRequestStatus = "hello"; wrong
console.log(subscribes);
console.log(apRequestStatus);
// .....................................
const orders = ["12", "13", "14"];
let currentOrder;
for (let order of orders) {
    if (order === "13") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
//# sourceMappingURL=union.js.map