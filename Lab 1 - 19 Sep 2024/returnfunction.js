// Function that takes the length and width of a rectangle as parameters and returns the area of the rectangle
function calculateRectangleArea(length, width){
    let area = length * width;
    return area;
}

// Call the function and store the result in a variable
let result = calculateRectangleArea(2,5);

console.log("A rectangle with length 2 and width 5 has an area of " + result + ".");
