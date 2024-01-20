// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

console.log("Kata 6");
let arr = /[a-z]/gi;
let num = Array.from(arr);
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log("t".match(arr));
console.log(alphabet.indexOf(alphabet) - alphabet);

function alphabetPosition(text) {
  let newarr = [];
  for (let i = 0; i < text.length; i++) {
    const Capitalalphabet = "abcdefghijklmnopqrstuvwxyz"
      .toUpperCase()
      .split("");
    const Smallalphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let smallregx = text[i].match(/[a-z]/gi);
    let capregx = text[i].match(/[A-Z]/gi);
    // if (smallregx || capregx) {
    //   newarr.push(
    //     text[i].indexOf(Capitalalphabet.findIndex() || Smallalphabet.length - i)
    //   );
    //   console.log(text[i]);
    // }
    //   }
    return newarr.join(" , ");
  }
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// OUtput:
// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//
// String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending) {
  // my Solution
  // let arr = [];
  // str = [...str].reverse();
  // console.log(ending.length);
  // for (let i = 0; i < ending.length; i++) arr.push(str[i]);
  // arr = arr.reverse().join("");
  // return arr == ending;

  //Solution Two
  // return str.endsWith(ending);

  // Solution Three
  // if (typeof str != "string" || typeof ending != "string") throw "wrong type";
  // if (ending.length > str.length) return false;
  // return str.substr(str.length - ending.length, ending.length) == ending;

  // Solution Three
  // return str.substr(-ending.length) == ending;

  // Solution Four
  return str.slice(0 - ending.length) === ending;
}

console.log(solution("abcde", "cde"));

//Count characters in your string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count(string) {
  // TODO
  return `${{ ...string }}`;
}

console.log(count("ab"));
//Mexican Wave
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
// function wave(str) {
//   // my solution
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") continue;
//     str = [...str];
//     str[i] = str[i].toUpperCase();
//     str = str.join("");
//     arr.push(str);
//     str = str.toLowerCase();
//   }
//   return arr;
// }

// second solution
// var wave = (w) =>
//   [...w]
//     .map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1))
//     .filter((a) => a != w);

//Third solution
function wave(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      console.log(index);
      console.log(str.slice(0, index));
      console.log(char.toUpperCase());
      console.log(index + 1);
      console.log(str.slice(index + 1));
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result;
}
console.log(wave(" gao "));

console.log("sara".substring(0, 2));

// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(A) {
  // let count = 0;
  // let minCount = 0;
  // let maxCount = 0;
  // let pivot = Math.max(...A);
  // let right = [];
  // let left = [];
  // for (let i = 0; i < A.length; i++) {
  //   if (A[i] == pivot) {
  //     console.log(i);
  //     count++;
  //   } else if (A[i] < pivot) {
  //     right.push(A[i]);
  //   }
  // }
  // let max = Math.max(...right);
  // let min = Math.min(...right);
  // for (let k = 0; k < right.length; k++) {
  //   console.log(max);
  //   if (A[k] == min) {
  //     minCount++;
  //   } else if (A[k] == max) {
  //     maxCount++;
  //   } else {
  //     count++;
  //   }
  // }
  // if (count.length % 2 != 0) {
  //   return pivot;
  // } else if (maxCount.length % 2 != 0) {
  //   return max;
  // } else if (min.length % 2 != 0) {
  //   return min;
  // }
  return A.filter((i) => i.length % 2 === 0);
}
console.log(findOdd([0, 1, 0, 1, 0]));
