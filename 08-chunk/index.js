// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    return  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  ); 
};
