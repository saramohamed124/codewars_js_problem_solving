// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  // Solution ONe (my solution)
  // let newStr = '';
  // for (let i = 0; i < str.length; i++) {
  //     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
  //         newStr += str[i];
  //     }
  // }
  // return newStr.length;

  // solution Two
  let vowels = "aeiou";
  // let count = 0;
  // let strArray = str.replaceAll(' ', '').split("");
  // for (let i = 0; i < strArray.length; i++) {
  //     if (vowels.includes(strArray[i])) {
  //         count++;
  //     }
  // }
  // return count

  // solution Three
  return str
    .replaceAll(" ", "")
    .split("")
    .filter((letters) => vowels.includes(letters)).length;
}
console.log(getCount("abracadabra"));

// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  // let newArr = [];
  // numbers.split(",")
  // for (let i = 0; i < numbers.length; i++) {

  //     if (parseInt(numbers[i]) !== "string") {
  //         newArr.push(parseInt(numbers[i]));
  //     } else {
  //         return;
  //     }
  // }
  // let [start, end] = [Math.min(...newArr), Math.max(...newArr)]
  // return end

  // Solution ONe
  // let newArr = numbers.split(" ").map((e) => Number(e));
  // let [start, end] = [Math.min(...newArr), Math.max(...newArr)]

  // return ` ${end} ${start}`

  // Solution Two
  // let newArr = numbers.split(" ").map((e) => Number(e));
  // return `  ${Math.max(...newArr)} ${Math.min(...newArr)}`

  // Solution Three
  let newArr = numbers
    .split(" ")
    .map((e) => Number(e))
    .sort((a, b) => a - b);
  return `${newArr[newArr.length - 1]} ${newArr[0]} `;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  // return Number(num.toString().split("").map((e) => Math.pow(e, 2)).join(""));
  return Number(
    Array.from(num.toString())
      .map((e) => Math.pow(e, 2))
      .join("")
  );
}
console.log(squareDigits(3212));

// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {
  // MY solution
  // return parseInt(n.toString().split("").map((e) => e).sort((a, b) => b - a).join(""))
  // Solution two
  // return parseInt(n.toString().split("").sort().reverse().join(""))
  // Solution Three
  return +n.toString().split("").sort().reverse().join("");
}
console.log(descendingOrder(134));

// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
  // My solution
  // let arr = [];
  // let set = new Set(str.toLowerCase());
  // if ([...str].length <= [...set].length || str === '') {
  //     return true;
  // }
  // else {
  //     return false;
  // }
  // Solution Two
  return new Set(str.toUpperCase()).size == str.length;
}
console.log(isIsogram("moOse"));
console.log(isIsogram("aba"));
console.log(isIsogram("isogram"));

// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  // My solution
  // n = n.toString().split('').reverse();
  // let newArr = [];
  // for (let i = 0; i < n.length; i++) {
  //     newArr.push(+n[i])
  // }
  // return [...newArr];

  // Solution Two
  // return n.toString().split("").map((e) => +e).reverse();

  // Solution Three
  // return String(n).split('').map(Number).reverse()

  // solution Four
  return (n + "").split("").map(Number).reverse();
}
console.log(digitize(35231));

// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  //   my solution (don't work)
  //   let arrFilter = [...s].filter(function () {
  //     for (let i = 0; i < [...s].length; i++) {
  //       if ([...s].length % 2 === 0) {
  //         let res = s.length / 2;
  //         if (res) {
  //           s = s[--res] + s[++res];
  //         } else {
  //           let nre = Math.round(s.length / 2);
  //           s = s[nre];
  //         }
  //       } else {
  //         s = s[Math.ceil(s.length / 2) - 1];
  //       }
  //     }
  //   });
  //   return s;
  // solution one
  //   return s.length % 2 === 0
  //     ? s[s.length / 2 - 1] + s[s.length / 2]
  //     : s[Math.ceil(s.length / 2) - 1]; //4 -1
  //   solution Two
  //   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
  // SolutionThree
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}
// let strr = "stea";
// console.log(strr.substr(1, 2));

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));

//Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  // my solution
  // let newarr = [];
  // let arr = [...s];
  // for (let i = 0; i < arr.length; i++) {
  //   let cap = "";
  //   cap = arr[i].toUpperCase();
  //   if (i > 0) {
  //     cap = "-" + arr[i].toUpperCase();
  //   }
  //   newarr.push(cap);
  //   if (i > 0) {
  //     newarr.push(arr[i].toLowerCase().repeat(i));
  //   }
  // }
  // return newarr.join("");
  //
  //Solution Two
  // return s
  //   .toLowerCase()
  //   .split("")
  //   .map((letter, i) => letter.toUpperCase() + letter.repeat(i))
  //   .join("-");
  //
  //Solution three
  // return s
  //   .split("")
  //   .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
  //   .join("-");
  //
  // return [...s]
  //   .map((element, index) => {
  //     return element.toUpperCase() + element.toLowerCase().repeat(index);
  //   })
  //   .join("-");
  //solution four
  // var array = [];
  // for (i = 0; i < s.length; i++) {
  //   array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  // }
  // return array.join("-");
  //
  return s
    .toUpperCase()
    .split("")
    .reduce((a, v, i) => a + "-" + v + v.toLowerCase().repeat(i));

  //
}
// // Solution five
// const repeat = (s, n) => Array.from({ length: n }, () => s).join("");
// const accum = (s) =>
//   s
//     .split("")
//     .map((c, i) => c.toUpperCase() + repeat(c.toLowerCase(), i))
//     .join("-");
//
console.log(accum("vSR"));

//
// Is n divisible by (...)?
// https://www.codewars.com/kata/558ee8415872565824000007/train/javascript
function isDivisible(...n) {
  let newnum = n[0];
  let res = n.filter((pre, curr) => (pre % curr === 0 ? true : false));
  if (res === " ") return false;
  else return true;
}
console.log(isDivisible(8, 3, 4, 2, 5));

//YOu are square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
var isSquare = function (n) {
  // return Number.isInteger(Math.sqrt(n));
  // solution 2
  return Math.sqrt(n) % 1 === 0;
};
// Solution
// const isSquare = (n) => Number.isInteger(Math.sqrt(n));

console.log(isSquare(25));

// List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filter_list(l) {
  // my solution

  // let newarr = [];
  // for (let i = 0; i < l.length; i++) {
  //   typeof l[i] !== "string" ? newarr.push(l[i]) : null;
  // }
  // return newarr;

  // Solution two
  // return l.filter((ele) => typeof ele !== "string");

  // Solution Three
  // return l.filter((v) => typeof v == "number");

  // Solution Four
  // return l.filter((e) => Number.isInteger(e));

  // Solution Five  //
  return l.filter(Number.isInteger);
}
console.log(filter_list([1, 2, "a", "b"]));
//
// Counting sheep...
// www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
function countSheeps(sheep) {
  // My solution
  // let newsheep = 0;
  // for (let i = 0; i < sheep.length; i++) {
  //   if (
  //     sheep[i] === " " ||
  //     sheep[i] === undefined ||
  //     sheep[i] === null ||
  //     sheep[i] === false
  //   )
  //     sheep[i] = 0;
  //   newsheep += sheep[i];
  // }
  // return newsheep;
  //Solution Two
  // let counter = 0;
  // sheep.map((m) => {
  //   if (m === true) counter++;
  // });
  // return counter;
  // Solution Three
  return sheep.filter(Boolean).length;
}

console.log(countSheeps([null, true, true]));

// Opposite number
// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
function opposite(number) {
  return -number;
}
console.log(opposite(1));

// Sentence Smash
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

function smash(words) {
  return words.join(" ");
}
console.log(smash(["hello", "world"]));

// Delete occurrences of an element if it occurs more than n times
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
function deleteNth(arr, n) {
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(result);
  //   console.log(result.filter((x) => x === arr[i]).length < n);
  //   if (result.filter((x) => x === arr[i]).length < n) {
  //     console.log(result.filter((x) => x === arr[i]).length < n);
  //     result.push(arr[i]);
  //     console.log(result);
  //   }
  // }
  // return result;
  //another solution
  // while (true) {
  //   for (var i = 0; i < arr.length; ++i) {
  //     var count = 0;

  //     for (var j = 0; j < arr.length; ++j) {
  //       if (arr[i] === arr[j]) {
  //         ++count;

  //         if (count > n) {
  //           arr.splice(j, 1);
  //           break;
  //         }
  //       }
  //     }
  //     if (j !== arr.length) break;
  //   }
  //   if (i === arr.length) break;
  // }

  // return arr;
  // My solution
  let newArr;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[i] === arr[k]) {
        k++;
        continue;
      }
      // if (arr.length !== n) arr.push(arr[i]);
    }
  }

  return arr;
}
console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
