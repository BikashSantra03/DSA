const findIndexces = (array, sum) => {
  let i = 0;
  j = array.length - 1;
  while (i < j) {
    if (array[i] + array[j] === sum) {
      return { first: i, last: j };
    } else if (array[i] + array[j] > sum) {
      j--;
    } else i++;
  }
  return { first: -1, last: -1 };
};

const array = [100, 200, 300, 450, 500, 600, 700];
const sum = 950;
const { first, last } = findIndexces(array, sum);
console.log(first, last);

// Worst case Time complexity = O(n*log(n))
