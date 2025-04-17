function Union(A, B) {
  const resultArray = [];

  let A_Start = 0;
  let A_End = A.length - 1;
  let B_Start = 0;
  let B_End = B.length - 1;

  while (A_Start <= A_End && B_Start <= B_End) {
    if (A[A_Start] === B[B_Start]) {
      resultArray.push(A[A_Start]);

      //increment both
      A_Start++;
      B_Start++;
    } else if (A[A_Start] < B[B_Start]) {
      resultArray.push(A[A_Start]);
      A_Start++;
    } else {
      resultArray.push(B[B_Start]);
      B_Start++;
    }
  }

  // Add any remaining elements from A

  while (A_Start <= A_End) {
    resultArray.push(A[A_Start]);
    A_Start++;
  }

  // Add any remaining elements from B
  while (B_Start <= B_End) {
    resultArray.push(B[B_Start]);
    B_Start++;
  }

  return resultArray;
}

const A = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const B = [5, 8, 10, 15, 25, 30, 50, 55, 70, 90, 100, 150];

const resultArray = Union(A, B);

console.log(resultArray);



//Time complexity =(m+n moves) = O(n)