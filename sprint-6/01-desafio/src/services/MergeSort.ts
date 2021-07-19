type TCompFunc<T> = (e1: T, e2: T) => number;

export default function mergeSort<T>(items: T[], compFunc: TCompFunc<T>): T[] {
    return divide(items, compFunc);
}

function divide<T>(items: T[], compFunc: TCompFunc<T>): T[] {
    var halfLength = Math.ceil(items.length / 2);
    var low = items.slice(0, halfLength);
    var high = items.slice(halfLength);
    if (halfLength > 1) {
        low = divide(low, compFunc);
        high = divide(high, compFunc);
    }
    return combine(low, high, compFunc);
}

function combine<T>(low: T[], high: T[], compFunc: TCompFunc<T>): T[] {
    var indexLow = 0;
    var indexHigh = 0;
    var lengthLow = low.length;
    var lengthHigh = high.length;
    var combined = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
        var lowItem = low[indexLow];
        var highItem = high[indexHigh];
        if (lowItem !== undefined) {
            if (highItem === undefined) {
                combined.push(lowItem);
                indexLow++;
            } else {
                const comp = compFunc(lowItem, highItem);
                if (comp <= 0) {
                    combined.push(lowItem);
                    indexLow++;
                } else {
                    combined.push(highItem);
                    indexHigh++;
                }
            }
        } else {
            if (highItem !== undefined) {
                combined.push(highItem);
                indexHigh++;
            }
        }
    }
    return combined;
}