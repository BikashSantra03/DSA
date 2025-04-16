function mergeSort(arr, i, j) {
  // Base case: arrays of length 1 are already sorted
  if (i == j) return arr;
  else {
    const mid = Math.floor((i + j) / 2);
    mergeSort(arr, i, mid);
    mergeSort(arr, mid + 1, j);

    merge(arr, i, mid, mid + 1, j);
  }
}

function merge(arr, leftStart, leftEnd, rightStart, rightEnd) {
  const arrStart = leftStart;
  const temp = [];
  while (leftStart <= leftEnd && rightStart <= rightEnd) {
    if (arr[leftStart] <= arr[rightStart]) {
      temp.push(arr[leftStart]);
      leftStart++;
    } else {
      temp.push(arr[rightStart]);
      rightStart++;
    }
  }

  // If there are any remaining elements in the left array, add them
  if (leftStart <= leftEnd) {
    while (leftStart <= leftEnd) {
      temp.push(arr[leftStart]);
      leftStart++;
    }
  }

  // If there are any remaining elements in the right array, add them
  if (rightStart <= rightEnd) {
    while (rightStart <= rightEnd) {
      temp.push(arr[rightStart]);
      rightStart++;
    }
  }

  // Copy the sorted elements back to the original array from leftStart
  for (let k = 0; k < temp.length; k++) {
    arr[arrStart + k] = temp[k];
  }
}

const unsortedArray = [1, 10, 4, 34, 15, 7, 45, 25, 78, 49, 56, 18];

mergeSort(unsortedArray, 0, unsortedArray.length - 1);
console.log("Sorted array:", unsortedArray);

/*
  Reccurance Relation for Time Complexity = 2T(n/2)+n    n= divide time + conquer time [n= number of moves on each level]
  Time Complexity  = θ(n*logn)

  stack size= log(n)

   */
