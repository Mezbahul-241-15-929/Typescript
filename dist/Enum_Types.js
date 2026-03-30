var RType;
(function (RType) {
    RType[RType["success"] = 0] = "success";
    RType[RType["failure"] = 1] = "failure";
    RType[RType["unauthorized"] = 2] = "unauthorized";
    RType[RType["forbidden"] = 3] = "forbidden";
})(RType || (RType = {}));
const response = {
    status: 200,
    type: RType.success,
    data: {
        id: 1,
        name: "John Doe"
    }
};
console.log(response); //success: type: 0
export {};
//# sourceMappingURL=Enum_Types.js.map