/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let lowest, highest;
    let sorted = numbers.split(" ").sort((a, b) => a - b);
    lowest = sorted[0];
    highest = sorted[sorted.length - 1];
    return `${lowest} ${highest}`;
}
