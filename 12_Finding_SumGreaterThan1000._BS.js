const findIndexces = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    const complement = sum - array[i];
    // Perform binary search on the subarray from index i + 1 to the end
    let left = i + 1;
    let right = array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] > complement) {
        return { first: i, last: mid };
      } else {
        left = mid + 1;
      }
    }
  }
  return { first: -1, last: -1 };
};

const array = [100, 200, 300, 400, 500, 600, 700];
const sum = 1000;
const { first, last } = findIndexces(array, sum);
console.log(first, last);

// Worst case Time complexity = O(n*log(n))
