// 11a. Create an array of numbers: const nums = [10, 20, 30]; Modify the last value in the array and change it to 99.

/*
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);
*/

// 11b. Create a function getLastValue(array) that takes an array and returns the last value in the array.

/*
function getLastValue(arr) {
  return arr[arr.length - 1];
}
let lastArr = [4, 5, 6, 7];
console.log(getLastValue(lastArr));
*/

// 11c. Create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped.

/*
function arraySwap(arr) {
  const firstValue = arr[0];
  const lastValue = arr[arr.length - 1];

  arr[0] = lastValue;
  arr[arr.length - 1] = firstValue;

  return arr;
}
let egArray = [5, 6, 7, 8];
console.log(arraySwap(egArray));
*/

// 11d. Create a for loop that counts up from 0 to 10, counting by 2.

/*
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
*/

// 11e. Create a for loop that counts down from 5 to 0.

/*
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
*/

// 11f. Redo exercises 11d and 11e, but using while loops instead of for loops.

/*
let i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}
*/

/*
let i = 5;
while (i >= 0) {
  console.log(i);
  i -= 1;
}
*/

// 11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.

/*
let arr = [1, 2, 3, 4, 5];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i] + 1);
}
console.log(arr2);
}*/

// 11h. Create a function addOne(array) that takes an array of numbers and returns a new array where each number is increased by 1.

/*
function addOne(arr) {
  let newArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    newArr.push(arr[i] + 1);
  }
  return newArr;
}

const lol = [10, 20, 30, 40];
console.log(addOne(lol)); 
*/
// 11i. Create a function addNum(array, num) that takes an array of numbers and returns a new array where each number is increased by num.

/*
const arr = [1, 2, 3, 4, 5];
let arr2 = [];

function addNum(array, num) {
  let arr3 = [];
  for (let i = 0; i <= array.length - 1; i++) {
    arr3.push(array[i] + num);
  }
  return arr3;
}

console.log(addNum(arr, 5));
*/

// 11j. Create a function addArrays(array1, array2) that takes two arrays of numbers and adds each number in the arrays together.

/*
const arr = [10, 20, 30, 40];
const arr2 = [10, 20, 30, 40];

function addArrays(array1, array2) {
  let arr3 = [];
  for (let i = 0; i <= array1.length - 1; i++) {
    arr3.push(array1[i] + array2[i]);
  }
  return arr3;
}

console.log(addArrays(arr, arr2));
*/

// 11k. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.

/*
const arr = [0, 10, 20, 30, 40];

function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count++;
    }
  }
  return count;
}
console.log(countPositive(arr));
*/

// 11l. Create a function minMax(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array. Do this using a loop instead of using Math.min() or Math.max().

/*
const arr = [4, 5, 6, 9, 10];
function minMax(nums) {
  let minNum = nums[0];
  let maxNum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }

  return { minimumNumber: minNum, maximumNumber: maxNum };
}
console.log(minMax(arr));
*/

// 11m. Update exercise 11l so that minMax(nums) also handles an empty array and an array with a single element.

/*
const arr = [];
function minMax(nums) {
  let minNum = nums[0];
  let maxNum = nums[0];

  if (minNum === undefined) {
    return null;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }

  return { minimumNumber: minNum, maximumNumber: maxNum };
}
console.log(minMax(arr));
*/

// 11n. Create a function countWords(words) that takes an array of strings and returns an object with how many times each string appears.

/*
const arr = ["food", "workout", "nap", "code", "food", "sleep"];

function countWords(words) {
  let count = {};
  for (let i = 0; i < words.length; i++) {
    if (count[words[i]] === undefined) {
      count[words[i]] = 1;
    } else {
      count[words[i]]++;
    }
  }
  return count;
}
console.log(countWords(arr));
*/
