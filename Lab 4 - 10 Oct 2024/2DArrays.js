// Custom exercises

// Create a 2D array that represents a 3x3 matrix, where each element is a number
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Print the element in the second row and third column
console.log(matrix[1][2]);

// Modify the element in the first row and second column to be 10
matrix[0][1] = 10;
console.log(matrix[0][1]);

// Write a nested loop to print each element of the 2D array on a new line
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++){
        console.log(matrix[i][j]);
    }
}