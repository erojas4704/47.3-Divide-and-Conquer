const findRotatedIndex = require("./find-rotated-index");

let ar = [];

for(let i = 0; i  < 10000000; i++) {
    ar.push(Math.floor(Math.random()* 100));
}

ar.sort((a, b) => a - b);


console.log(findRotatedIndex(ar, 14));