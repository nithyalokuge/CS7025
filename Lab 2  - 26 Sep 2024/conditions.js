// Custom exercises

// Check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

checkNumber(2);
checkNumber(0);
checkNumber(-10);

// Check if a person is eligible to vote
function checkEligibility(age) {
    if (age >= 18) {
        console.log("You can vote!");
    } else {
        console.log("You can't vote!");
    }
}

checkEligibility(18);
checkEligibility(29);
checkEligibility(15);

// Determine the grade of a student based on marks
function grading(marks) {
    if (marks >= 90) {
        console.log("Grade A!");
    } else if (marks >= 75) {
        console.log("Grade B!");
    } else if (marks >= 50) {
        console.log("Grade C!");
    } else {
        console.log("Grade F!");
    }
}

grading(100);
grading(58);
grading(20);

/* Check if a year is a leap year. A year is a leap year if:
-it is divisible by 4 but not by 100, or
-it is divisible by 400 */
function checkLeapYear(year) {
    if (((year % 4 === 0) && !(year % 100 === 0)) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

checkLeapYear(2000);
checkLeapYear(2020);
checkLeapYear(1900);
checkLeapYear(2094);

// Determine the largest of three numbers
function largestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1 + " is the biggest number.");
    } 
    if (num2 >= num1 && num2 >= num3) {
        console.log(num2 + " is the biggest number.");
    } else {
        console.log(num3 + " is the biggest number.");
    }
}

largestNumber(1, 2, 3);
largestNumber(2, 2, 2);