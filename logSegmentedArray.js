function logSegmentedArray(left, right, arr, target) {
    let m = Math.floor((left + right) / 2);
    console.log(`[${arr.slice(0, left - 1 < 0 ? 0 : left)} [\x1b[32m${arr.slice(left, m)} \x1b[31m${arr.slice(m, m + 1)}\x1b[32m ${arr.slice(m + 1, right + 1)}\x1b[0m] ${arr.slice(right + 1)}] => ${target}`);
}

module.exports = logSegmentedArray;