//Function declaration

function getRectangleAreaDeclaration(width, height) {
  return width * height;
}

//Function expression

const getRectangleAreaExpression = function (width, height) {
  return width * height;
};

//Arrow function
const getRectangleAreaArrow = (width, height) => width * height;

console.log("Площа прямокутника (declaration): " + getRectangleAreaDeclaration(5, 10));
console.log("Площа прямокутника (expression): " + getRectangleAreaExpression(5, 10));
console.log("Площа прямокутника (arrow): " + getRectangleAreaArrow(5, 10));
