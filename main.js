// Lario and Muigi Pipe Problem
// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

// solution
// create new emtpy array
// Loop through the given array
// add numbers to a new array

function pipeFix(numbers) {
    // solution one
    let nArr = [];
    // for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    //     nArr.push(i);
    // }
    // return nArr;

    // solution two
    // Destructuring 

    let [start, end] = [Math.min(...numbers), Math.max(...numbers)]; // هيبدا من اصغر رقم في ال array  اللي هوا اول رقم  و تنتهي باكبر رقم في ال array اللي هوا اخر رقم
    while (start <= end) {
        nArr.push(start);
        start++;
    }
    return nArr;
}
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]))
//
// Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str) {
    return str.slice(1, -1)
};
console.log(removeChar('eloquent'))
//
// Remove First and Last Character Part Two
// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
/** solution
 * 1- Check on the coming string to make sure that it is more than or equal three characters
 * 2- spilt the string into Array
 * 3- Loop through the Array to remove the first and last element
 * 4- Join the array into string space sperated
 */

function array(string) {
    // solution one
    // let splittostr = string.split(",");
    // if (!splittostr || splittostr.length < 3) {
    //     return null
    // }
    // let newArr = [];
    // for (let i = 1; i < splittostr.length - 1; i++) {
    //     newArr.push(splittostr[i])
    // }
    // return `${newArr.join(" ")}`

    // solution Two
    // let splittoStr = string.split(",");
    // if (!splittoStr || splittoStr < 3) {
    //     return null
    // }
    // return string.split(",").slice(1, -1).join(" ")

    // solution Three
    return string.split(",").slice(1, -1).join(" ") || null;
}
console.log(array("1,2,4,3"))

// Even Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function evenOrOdd(number) {
    // Solution One
    // if (number % 2 === 0) {
    //     return "Even";
    // } else {
    //     return "Odd";
    // }

    //Solution Two 
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(3));

// Sum Of Positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
    // Solution One
    // let v = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         v += arr[i]
    //     }
    // }
    // return v;

    // Solution Two
    return arr.filter((x) => x > 0) // return a new array
        .reduce((acc, current, index) => acc + current, 0); // take accumulator(acc) and sum acc and current 
}

// Sum - Without - The - Highest - And - The - Lowest - Number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
    // Solution 
    if (array == null) return 0;
    return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, current) => acc + current, 0)
    // Solution => it is success with some tests not tests in this problem
    // return array.filter((x) => x !== Math.max(...array) && x !== Math.min(...array)).reduce((acc, current) => acc + current, 0)
    // solution
    // if (array == null) return 0;
    // let maxValue = Math.max(...array)
    // let minValue = Math.min(...array)
    // let filterArr = array.filter((x) => x !== maxValue && x !== minValue);
    // let newArr = filterArr.reduce((acc, current) => acc + current, 0)
    // return newArr
}

// String repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr(n, s) {
    // Solution One
    // return s.repeat(n)

    // Solution Two 
    let newstr = "";
    for (let i = 0; i < n.length; i++) {
        newstr += s;
    }
    return newstr;
}
console.log(repeatStr(2, "sama "))

