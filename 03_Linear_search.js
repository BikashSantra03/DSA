const LinearSearch = (array, n) => {
  for (let i of array) {
    if (array[i] === n) return i;
  }
};

const array = [2, 7, 4, 8, 99, 56, 78, 3, 57];
const index = LinearSearch(array, 57);
console.log(index);

/*
Time Complexity  - 1(Constant) (Best case)
Time Complexity  - (n) (Worst case)
Time Complexity  - (n+1)/2 (Average case)
*/
