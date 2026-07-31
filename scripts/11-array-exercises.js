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

// ARRAY EXERCISES PT 2 //

// 11o. Create an array of strings, loop over the array, and check if the string `'search'` is inside the array. If it is, `console.log()` the index of `'search'` in the array. If not, `console.log(-1)`.

/*
const arr = [`google`, `youtube`, `search`, `youtube`];
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === `search`) {
    console.log(i);
    found = true;
  }
}

if (found === false) {
  console.log(-1);
}
*/

// 11p. Modify exercise 11o so that if `'search'` appears multiple times in the array, it `console.log()`s the index of the first appearance of `'search'`. Use `break`.

/*
const arr = [`google`, `youtube`, `search`, `youtube`, `search`];
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === `search`) {
    console.log(i);
    found = true;
    break;
  }
}

if (found === false) {
  console.log(-1);
}
*/

// 11q. Create a function `findIndex(array, word)` that searches an array for a string (the `word` parameter) and returns the index of its first appearance. If the string does not exist in the array, return `-1`.

/*
const arr = [`sex`, `on`, `the`, `beach`, `word`, `at`, `word`];

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex(arr, `word`));
*/

// 11r. Create a function `removeEgg(foods)` that takes an array of strings and returns a new array where the string `'egg'` is removed.

// const arr = [`chicken`, `soup`, `egg`, `olive oil`];

// function removeEgg(foods) {
//   let newArray = [];
//   for (let i = 0; i < foods.length; i++) {
//     if (foods[i] === `egg`) {
//       continue;
//     }
//     newArray.push(foods[i]);
//   }

//   return newArray;
// }

// console.log(removeEgg(arr));

// 11s. Update exercise 11r so that only the first **2** occurrences of `'egg'` are removed from the array.

// const arr = [
//   `chicken`,
//   `soup`,
//   `egg`,
//   `olive oil`,
//   `egg`,
//   `chicken`,
//   `egg`,
//   `soup`,
// ];

// function removeEgg(foods) {
//   let newArray = [];
//   let eggsRemoved = 0;
//   for (let i = 0; i < foods.length; i++) {
//     if (foods[i] === `egg` && eggsRemoved < 2) {
//       continue;
//       eggsRemoved++;
//     }

//     newArray.push(foods[i]);
//   }
//   return newArray;
// }
// console.log(removeEgg(arr));

// 11t. Using `.reverse()`, update exercise 11s so that only the last **2** occurrences of `'egg'` are removed from the array.

/*
const arr = [
  `chicken`,
  `soup`,
  `egg`,
  `olive oil`,
  `egg`,
  `chicken`,
  `egg`,
  `soup`,
];

function removeEgg(foods) {
  let reversedFoods = foods.reverse(); // flip order first
  let newArray = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === `egg` && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }
    newArray.push(reversedFoods[i]);
  }

  return newArray.reverse();
}
console.log(removeEgg(arr));

*/

// 11u. Update exercise 11t so that the function does **not** modify the original array. Create a copy of the array before reversing it.

// let arr = [
//   `chicken`,
//   `soup`,
//   `egg`,
//   `olive oil`,
//   `egg`,
//   `chicken`,
//   `egg`,
//   `soup`,
// ];

// let copy = arr.slice();

// function removeEgg(foods) {
//   let foodsCopy = foods.slice();
//   let reversedFoods = foodsCopy.reverse(); // flip order first
//   let newArray = [];
//   let eggsRemoved = 0;

//   for (let i = 0; i < reversedFoods.length; i++) {
//     if (reversedFoods[i] === `egg` && eggsRemoved < 2) {
//       eggsRemoved++;
//       continue;
//     }
//     newArray.push(reversedFoods[i]);
//   }

//   return newArray.reverse();
// }
// console.log(removeEgg(arr));
// console.log(arr);

// # Challenge Exercises

// 11v. Create a loop that displays the numbers `1` to `20` in the console. If a number is divisible by `3`, display `"Fizz"` instead of the number. If it is divisible by `5`, display `"Buzz"` instead of the number. If it is divisible by both `3` and `5`, display `"FizzBuzz"` instead.

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`fuzzbuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`buzz`);
//   } else {
//     console.log(i);
//   }
// }

// 11w. Create a copy of exercise 11q (`findIndex`). Then create a function `unique(array)` that takes an array of strings and returns a new array where each string appears only once (no duplicates). Use your `findIndex()` function in your solution.

// const arr = [`sex`, `on`, `the`, `beach`, `word`, `at`, `word`];

// function findIndex(array, word) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === word) {
//       return i;
//     }
//   }
//   return -1;
// }

// function unique(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (findIndex(newArr, array[i]) === -1) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }

// console.log(unique(arr));

// 11x. Create three files: `11x.html`, `11x.css`, and `11x.js`. Copy your Todo List project into these files, update the `<link>` and `<script>` elements to use `11x.css` and `11x.js`, and update the Todo List to use `localStorage` so the list persists after refreshing the page.
