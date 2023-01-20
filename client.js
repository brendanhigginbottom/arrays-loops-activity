/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

let groupHobbies = ['cycling', 'gaming', 'lifting', 'coding'];
let listNumber = 1;
for (let element of groupHobbies) {
    console.log(`${listNumber}: ${element}`);
    listNumber += 1;
}
console.log(`Total hobbies: ${groupHobbies.length}`);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

let colors = ['orange', 'red', 'blue', 'teal'];
let tealCount = 0;
for (i = 0; i < colors.length; i += 1) {
    if (colors[i] === 'teal') {
        tealCount +=1;
    }
}

console.log(colors);
console.log(`Teal was found ${tealCount} time(s)`);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

let numbers = [1, 3, 6, 8, 10];
let oddNumbers = [];
let evenNumbers = [];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i])
    }
    else {
        oddNumbers.push(numbers[i])
    }
};
console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

let booleanArray = [true, false, false, true, true];
let toggled = [];
for ( let boolean of booleanArray) {
    if (boolean === true) {
        toggled.push(false)
    }
    else {
        toggled.push(true);
    }
}
console.log(booleanArray);
console.log(toggled);


// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */
let zeroArray = [5, 6, 0, 7, 0];
for ( i = 0; i < zeroArray.length; i += 1 ) {
    if ( zeroArray[zeroArray.length - 1] === 0 ) {
        zeroArray
    }
}


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8
