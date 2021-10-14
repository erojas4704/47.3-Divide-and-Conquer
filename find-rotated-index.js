function findRotatedIndex(arr, target) {

    return traverse(0, arr.length - 1, arr, target);
}

function traverse(left, right, arr, target) {
    let m = Math.floor((left + right) / 2); //Middle index
    //[${arr.slice(left, right + 1)}]
    console.log(
        `[${arr.slice(0, left - 1 < 0 ? 0 : left)} [\x1b[32m${arr.slice(left, m )} \x1b[31m${arr.slice(m, m + 1)}\x1b[32m ${arr.slice(m + 1, right + 1)}\x1b[0m] ${arr.slice(right + 1)}]
        Left: [${left}]: ${arr[left]}
        Right: [${right}]: ${arr[right]}
        Middle: [${m}]: ${arr[m]}
        Target: ${target}
        `
    );
    if (target === arr[m]) return m;
    if (left >= right) return -1;

    if (arr[0] < arr[arr.length - 1]) {
        console.log("Higher numbers right side"); //Lower numbers are to the left
        if (target < arr[m]) {
            return traverse(left, m - 1, arr, target); //Go left
        } else if (target > arr[m]) {
            return traverse(m + 1, right, arr, target); //Go right
        }
    } else if (arr[0] > arr[arr.length - 1]) {
        console.log("Higher numbers left side");//Lower numbers are to the right
        if (target < arr[m]) {
            console.log("middle number higher than target. Higher numbers are to the left, going right.");
            return traverse(m + 1, right, arr, target); //Go right
        } else if (target > arr[m]) {
            console.log("middle number lower than target. Higher numbers are to the left, going left.");
            return traverse(left, m - 1, arr, target); //Go left
        }
    }
}

module.exports = findRotatedIndex