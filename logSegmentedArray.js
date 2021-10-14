function logSegmentedArray(left, right, arr, target, depth, truncateAfter = 12) {
    let m = Math.floor((left + right) / 2);
    let segment1 = arr.slice(0, left - 1 < 0 ? 0 : left);
    let segment2 = arr.slice(left, m);
    let segment3 = arr.slice(m, m + 1);
    let segment4 = arr.slice(m + 1, right + 1);
    let segment5 = arr.slice(right + 1);
    let segment1Str = segment1.length > truncateAfter ? `...${segment1.slice(segment1.length - truncateAfter).join(', ')}` : segment1.join(', ');
    let segment2Str = segment2.length > truncateAfter ? `...${segment2.slice(segment2.length - truncateAfter).join(', ')}` : segment2.join(', ');
    let segment4Str = segment4.length > truncateAfter ? `${segment4.slice(-truncateAfter).join(', ')}...` : segment4.join(', ');
    let segment5str = segment5.length > truncateAfter ? `${segment5.slice(-truncateAfter).join(', ')}...` : segment5.join(', ');

    console.log(`[${segment1Str} [\x1b[32m${segment2Str} \x1b[31m${segment3}\x1b[32m ${segment4Str}\x1b[0m] ${segment5str}] => ${target} Operations: ${depth}`);
}

module.exports = logSegmentedArray;