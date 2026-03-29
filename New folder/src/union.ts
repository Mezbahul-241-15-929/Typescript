let subscribes: number | string = 1000;

subscribes = "1000";
subscribes = 1000;

let apRequestStatus: "pending" | 'success' | 'error' = "pending";

apRequestStatus = "success";
apRequestStatus = "pending";
// apRequestStatus = "hello"; wrong


console.log(subscribes);
console.log(apRequestStatus);

// .....................................
const orders = ["12", "13", "14"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "13") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);