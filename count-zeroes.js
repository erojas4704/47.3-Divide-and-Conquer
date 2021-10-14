function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    //Array is sorted in descending order.

    while (left < right) {
        let middle = Math.floor((left + right) / 2); //Get the middle value
        if (arr[middle] === 1) {
            left = middle + 1; //If the middle is 1, then look at the right side for 1s.

        } else {
            right = middle - 1;  //If the middle is 0, look at the left side.
        }
    }

    //The final value of L is where 1s start being zeroes, we can assume the rest are 0s.
    if (arr[left] === 1) return arr.length - left - 1;

    return arr.length - left;
}

module.exports = countZeroes
