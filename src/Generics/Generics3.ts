interface APIResponse<T>{
    status: number;
    type:string;
    data:T;
}

const response: APIResponse<object> = {
    status: 200,
    type: "success",
    data: {
        id: 1,
        name: "John Doe"
    }
};
