const findIndexces = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) return { first: i, last: j };
    }
  }

  return { first: -1, last: -1 };
};

const array = [100, 200, 300, 400, 500, 600, 700];
const sum = 1000;
const { first, last } = findIndexces(array, sum);
console.log(first, last);

// Worst case Time complexity = O(n^2)
