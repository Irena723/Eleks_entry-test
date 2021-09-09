/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
    let strArr = str.split("");
    let result = [];
    for (let i = 0; i < strArr.length; i++) {
      let str = strArr[i].repeat(i + 1);
      result.push(str[0].toUpperCase() + str.substring(1));
    }
    return result.join("-");
}
