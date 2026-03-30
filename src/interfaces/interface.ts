interface RectangleOption{
    width: number;
    length:number;
}

function drawRectangle(options: RectangleOption){
    let width= options.width;
    let length= options.length;
}

drawRectangle({
    width: 100,
    length: 200,
    // height: 300 not allowed
})

let threeDoptions = {
    width: 100,
    length: 200,
    height: 300 //allowed
};

drawRectangle(threeDoptions);