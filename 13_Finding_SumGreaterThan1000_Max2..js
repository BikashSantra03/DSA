const findIndexces = (array, sum) => {
  let firstMax = 0,
    secondMax = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstMax) {
      secondMax = firstMax;
      firstMax = array[i];
    } else if (array[i] > secondMax && array[i] < firstMax) {
      secondMax = array[i];
    }
  }

  if (firstMax + secondMax > sum) {
    return { first: secondMax, last: firstMax };
  } else return { first: -1, last: -1 };
};

const array = [200, 700, 600, 300, 400, 100, 500];
const sum = 1000;
const { first, last } = findIndexces(array, sum);
console.log(first, last);

// Worst case Time complexity = O(n)
