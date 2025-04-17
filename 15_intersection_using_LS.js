function Intersection(A, B) {
  const resultArray = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        resultArray.push(A[i]);
      }
    }
  }
  return resultArray;
}

const A = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const B = [5, 8, 10, 15, 25, 30, 50, 55, 70, 90, 100, 150];

const resultArray = Intersection(A, B);

console.log(resultArray);

//Time complexity =O(n^2)
