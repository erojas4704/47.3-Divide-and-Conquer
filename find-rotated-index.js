const getArrayRotationIndex = require("./getArrayRotationIndex");
const logSegmentedArray = require("./logSegmentedArray");

function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    let rotationIndex = getArrayRotationIndex(0, arr.length - 1, arr);

    if (rotationIndex > 0) {
        if (target > arr[rotationIndex] && target < arr[right]) {
            left = middle;
        } else {
            right = middle;
        }
    }
    console.log(`\nFinding index of ${target} in [${arr.length > 40 ? `${arr.slice(0, 40)}...` : arr}]`);

    return traverse(left, right, arr, target);
}

function traverse(left, right, arr, target, depth = 0) {
    let m = Math.floor((left + right) / 2); //Middle index
    //[${arr.slice(left, right + 1)}]
    logSegmentedArray(left, right, arr, target, depth);

    if (target === arr[m]) return m;
    if (left >= right) return -1;

    if (target > arr[m]) {
        return traverse(m + 1, right, arr, target, depth + 1);
    } else if (target < arr[m]) {
        return traverse(left, m - 1, arr, target, depth + 1);
    }

    return -1;
}

module.exports = findRotatedIndex