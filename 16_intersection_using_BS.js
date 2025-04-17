function Intersection(A, B) {
  const resultArray = [];

  for (let i = 0; i < A.length; i++) {
    let left = 0;
    let right = B.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (B[mid] === A[i]) {
        resultArray.push(A[i]);
        break;
      } else if (B[mid] > A[i]) {
        right = mid - 1;
      } else left = mid + 1;
    }
  }
  return resultArray;
}

const A = [10, 20, 30, 40, 50, 60, 70, 809, 90];
const B = [5, 8, 10, 15, 25, 30, 50, 55, 70, 90, 100, 150];

const resultArray = Intersection(A, B);

console.log(resultArray);

//Time complexity = n * log2(n) = O(nlog(n))
