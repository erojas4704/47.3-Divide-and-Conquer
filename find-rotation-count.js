const getArrayRotationIndex = require("./getArrayRotationIndex");

function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    let rotationIndex = getArrayRotationIndex(left, right, arr);
    return rotationIndex;
}


module.exports = findRotationCount