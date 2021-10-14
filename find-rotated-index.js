const getArrayRotationIndex = require("./getArrayRotationIndex");

function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    let rotationIndex = getArrayRotationIndex(0, arr.length - 1, arr);

    if (target > arr[rotationIndex] && target < arr[right]) {
        left = middle;
    } else {
        right = middle;
    }
    console.log(`\nFinding index of ${target} in [${arr}]`);

    return traverse(left, right, arr, target);
}

function traverse(left, right, arr, target) {
    let m = Math.floor((left + right) / 2); //Middle index
    //[${arr.slice(left, right + 1)}]
    console.log(
        `[${arr.slice(0, left - 1 < 0 ? 0 : left)} [\x1b[32m${arr.slice(left, m)} \x1b[31m${arr.slice(m, m + 1)}\x1b[32m ${arr.slice(m + 1, right + 1)}\x1b[0m] ${arr.slice(right + 1)}] => ${target}`
    );

    if (target === arr[m]) return m;
    if(left >= right) return -1;

    if (target > arr[m]) {
        return traverse(m + 1, right, arr, target);
    } else if (target < arr[m]) {
        return traverse(left, m - 1, arr, target);
    }

    return -1;
}


findRotatedIndex([3, 4, 1, 2], 4)
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)
findRotatedIndex([37, 44, 66, 102, 10, 22], 14)
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)

module.exports = findRotatedIndex