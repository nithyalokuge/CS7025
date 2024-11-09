// Custom exercises

// Make a copy of the first array
let firstArr = [1,2,3,4];
let copyOfFirstArr = [...firstArr];
console.log(firstArr);
console.log(copyOfFirstArr);
firstArr.push(5);
console.log(firstArr);
console.log(copyOfFirstArr);

// Make a copy of the second array
let secondArr = [7,8,9,10];
let copyOfSecondArr = [...secondArr];
secondArr[0] = "box";
console.log(secondArr);
console.log(copyOfSecondArr); 