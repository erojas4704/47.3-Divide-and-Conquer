function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    let rotationIndex = getArrayRotationIndex(left, right, arr);
    return rotationIndex;
}

function getArrayRotationIndex(left, right, arr, direction) {
    let middle = Math.floor((left + right) / 2);

    // console.log(`[${arr}]
    //     Left: [${left}]: ${arr[left]} 
    //     Right: [${right}]: ${arr[right]} 
    //     Middle: [${middle}]: ${arr[middle]} 
    //     Section: [${arr.slice(left, right - left + 1)}]
    //     ${direction === "right" ? "-->" : "<--"}
    //     DIRECTION: ${direction}
    // `)

    if(left >= right)
        return 0; //ERROR

    if (arr[middle] > arr[middle + 1])
        return middle + 1;
    if (arr[middle] < arr[middle - 1])
        return middle;

    if (direction == undefined) {
        direction = arr[middle] < arr[0] ? "left" : "right";
    }

    if (direction === "left")
        right = middle - 1;
    else if (direction === "right")
        left = middle + 1;



    return getArrayRotationIndex(left, right, arr, direction);
    //7, 8, 1, 2, 3, 4, 5, 6,
}

module.exports = findRotationCount