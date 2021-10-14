const logSegmentedArray = require("./logSegmentedArray");

function findFloor(arr, min, left, right, c = 0) {
    if (left == undefined) left = 0;
    if (right == undefined) right = arr.length - 1;
    let m = Math.floor((left + right) / 2);

    logSegmentedArray(left, right, arr, min);

    if (arr[right] <= min) return arr[right];
    if (arr[m] <= min) return arr[m];
    if(left >= right) return -1;

    if (min < arr[m]) {
        return findFloor(arr, min, left, m - 1, c);
    } else if (min > arr[m]) {
        return findFloor(arr, min, m + 1, right, c);
    }


    return -1;
}


module.exports = findFloor