// function declaration
function rectangleAreaCalculation (width, height){
   return width * height
}
console.log(rectangleAreaCalculation(2,3))

// function expression
const rectangleAreaCalculation2 = function (width, height) {
    return width * height
}
console.log(rectangleAreaCalculation2(4,5))

// arrow function
const rectangleAreaCalculation3 = (width, height) => {
    return width * height
}
console.log(rectangleAreaCalculation3(6,7))