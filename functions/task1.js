// function declaration
function calculateRectangleArea (width, height) {
  return width * height
}
console.log(calculateRectangleArea(2, 3))

// function expression
const calculateRectangleArea2 = function (width, height) {
  return width * height
}
console.log(calculateRectangleArea2(4, 5))

// arrow function
const calculateRectangleArea3 = (width, height) => {
  return width * height
}
console.log(calculateRectangleArea3(6, 7))
