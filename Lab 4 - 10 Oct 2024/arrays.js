// Custom exercise

// Create an array with the names of 5 different fruits. Print the first and last element of the array.
let fruits = ["apple", "banana", "pear", "mango", "strawberry"];
console.log(fruits[0]);
console.log(fruits[4]);

/* Add a new fruit to the beginning of the array. Add another fruit to the end of the array.
Remove the first fruit from the array. Remove the last fruit from the array.*/
fruits.unshift("peach"); 
fruits.push("kiwi");
console.log(fruits[0]);
console.log(fruits[6]);
fruits.shift();
fruits.pop();
console.log(fruits[0]);
console.log(fruits[4]); 

// Print each fruit using a for loop.
for (let i = 0; i < 5; i++) {
    console.log(fruits[i]);
}

// Check if mango exists in the array
if (fruits.includes("mango")) {
    console.log("Mango is in the array.");
} else {
    console.log("Mango is not in the array.");
}