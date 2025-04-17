function Intersection(A, B) {
  const resultArray = [];

  let A_Start = 0;
  let A_End = A.length - 1;
  let B_Start = 0;
  let B_End = B.length - 1;

  while (A_Start <= A_End && B_Start <= B_End) {
    if (A[A_Start] === B[B_Start]) {
      resultArray.push(A[A_Start]);

      //Decrement both
      A_Start++;
      B_Start++;
    } else if (A[A_Start] < B[B_Start]) {
      A_Start++; // Move to the next element in A if it's smaller
    } else {
      B_Start++; // Move to the next element in B if it's smaller
    }
  }

  return resultArray;
}

const A = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const B = [5, 8, 10, 15, 25, 30, 50, 55, 70, 90, 100, 150];

const resultArray = Intersection(A, B);

console.log(resultArray);

//Time complexity T(m,n) = (m+n moves) = O(n)
