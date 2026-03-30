enum RType{ 
    success,
    failure,
    unauthorized,
    forbidden
}

interface APIResponse<T>{
    status: number;
    type:RType;
    data:T;
}

const response: APIResponse<object> = {
    status: 200,
    type: RType.success,
    data: {
        id: 1,
        name: "John Doe"
    }
};

console.log(response); //success: type: 0
