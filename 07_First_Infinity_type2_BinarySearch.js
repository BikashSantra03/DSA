const firstIndex = (a, i, j) => {
  if (i == j) {
    if (a[i] === Infinity) return i;
    else return -1;
  } else {
    const mid = Math.floor((i + j) / 2);
    if (a[mid] === Infinity) {
      if (a[mid - 1] != Infinity) return mid;
      else {
        return firstIndex(a, i, mid - 1);
      }
    } else {
      return firstIndex(a, mid + 1, j);
    }
  }
};

const arrLength = (array) => {
  let i = 1;
  while (array[i] != "$") {
    if (array[i] === Infinity) return i;
    else i *= 2;
  }
  return i;
};

const array = [
  80,
  90,
  -3,
  -10,
  89,
  95,
  -4,
  -7,
  -25,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
  "$",
];
const arrayLength = arrLength(array);
const firstInfinityIndex = firstIndex(array, 0, arrayLength);
console.log(firstInfinityIndex);
