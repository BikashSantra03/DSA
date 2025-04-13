const Searching = (a, i, j) => {
  if (i == j) {
    if (a[i] == i) return a[i];
    else return -1;
  } else {
    let mid = Math.floor((i + j) / 2);
    if (a[mid] == mid) return a[mid];
    if (a[mid] < mid) {
      return Searching(a, mid + 1, j);
    } else {
      return Searching(a, i, mid - 1);
    }
  }
};

const array = [-100, -80, -30, 2, 3, 4, 6, 10, 12, 13, 15];
const output = Searching(array, 0, array.length);

console.log(output);

/*

i/p: A sorted array of n- distinct inputs.
o/p: Find element Array[i], such that Array[i]==i


Using Linear search worst case time complexity = O(n)
Using Binary search worst case time complexity = O(log(n))


*/
