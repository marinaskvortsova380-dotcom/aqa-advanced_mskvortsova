function getRectangleArea(widthOfRectangle, heightOfRectangle) {
    const result = widthOfRectangle * heightOfRectangle;
    return result;
}
const result = getRectangleArea(5, 10);
console.log("Площа прямокутника: " + result);

// Function declaration
function getRectangleArea(widthOfRectangle, heightOfRectangle) {
    return widthOfRectangle * heightOfRectangle;
}

// Function expression
const getRectangleArea = function (widthOfRectangle, heightOfRectangle) {
    return widthOfRectangle * heightOfRectangle;
}

// Arrow function
const getRectangleArea = (widthOfRectangle, heightOfRectangle) => widthOfRectangle * heightOfRectangle;