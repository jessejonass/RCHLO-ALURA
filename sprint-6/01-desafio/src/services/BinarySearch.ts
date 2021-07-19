export default function binarySearch<T>(
    sortedArray: T[],
    searchFunc: (e: T) => number,
): T | undefined {

    let start = 0, end = sortedArray.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        const comp = searchFunc(sortedArray[mid]);
        
        if (comp === 0) {
            return sortedArray[mid];
        }

        else if (comp < 0) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return;
}