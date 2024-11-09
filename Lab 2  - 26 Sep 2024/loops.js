// Custom exercise

// Write a for loop that prints the numbers from 1 to 10
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

printNumbers();

// Write a do...while loop that prints the even numbers between 1 and 10
function printEvenNumbers() {
    let i = 1;
    do {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    } while (i <= 10);
}

printEvenNumbers(); 

// Write a while loop that calculates the sum of numbers from 1 to 100
function sumNum() {
    let i = 1;
    let res = 0;
    while (i <= 100) {
        res += i;
        i++;
    }
    return res;
}

console.log("The sum of numbers from 1 to 100 is " + sumNum() + ".");

// Write a function that takes an array and calculates the sum of its elements 
let numbers = [1, 2, 3, 4, 5, 6];
function sum(numbers) {
    let result = 0;
    for (let number in numbers) {
        result += numbers[number] ;
    }
    console.log("The sum of the elements in the array is " + result + ".");
}

sum(numbers); 

/* Write a for loop that iterates from 1 to 10. 
If the number 7 is encountered, stop the loop using the break statement. */
function breakLoop() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            console.log("Number 7 encountered. Loop stopped.");
            break;
        }
        console.log(i);
    }
}

breakLoop();

// Write a for loop that iterates from 1 to 10 but skips the number 5 using the continue statement
function stopAtFive() {
    for (let i = 1; i <=10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}

stopAtFive();

// Write a do...while loop that prints numbers from 1 to 10 but skips odd numbers using continue
function printEvenNum() {
    let i = 1;
    do {
        if (!(i % 2 === 0)) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    } while (i <= 10)
}

printEvenNum();