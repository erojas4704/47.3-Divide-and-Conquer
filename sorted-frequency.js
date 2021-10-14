//TODO simplify
function sortedFrequency(arr, value) {
    let left = 0;
    let start = 0;
    let right = arr.length - 1;
    //Array is sorted in ascending order.

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        console.log(arr[mid], left, mid, right);
        if (arr[mid] > value) {
            right = mid - 1; //If the middle number is greater than or equal to the value, then the right pointer is moved to the middle number.
        } else if (arr[mid] < value) {
            left = mid + 1; //If the middle number is less than or equal to the value, then the left pointer is moved to the middle number.
        } else if (arr[mid] === value) {
            right = mid - 1;
        }
    }
    //Left should be 2 here ??
    start = arr[left] == value ? left : left - 1;
    console.log("Start index", start);

    left = 0;
    right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        console.log(arr[mid], left, mid, right);
        if (arr[mid] > value) {
            right = mid - 1; //If the middle number is greater than or equal to the value, then the right pointer is moved to the middle number.
        } else if (arr[mid] < value) {
            left = mid + 1; //If the middle number is less than or equal to the value, then the left pointer is moved to the middle number.
        } else if (arr[mid] === value) {
            left = mid + 1;
        }
    }
    end = arr[left] == value ? left + 1: left;
    if(arr[end] < value) return -1;
    if(arr[start] > value) return -1; //IDK 

    return end - start;
}

module.exports = sortedFrequency