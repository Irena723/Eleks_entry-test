export const sameParityFilter = (arr = []) => {
    if(!arr.length) return [];
    const ifOdd = arr[0] % 2;
    const result = arr.filter(item => Boolean(item % 2) === Boolean(ifOdd))
    return result;
}
