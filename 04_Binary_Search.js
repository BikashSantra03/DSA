const BinarySearch = (array, i, j, x) => {
  if (i == j) {
    if (array[i] === x) return i;
    else return -1;
  } else {
    const mid = Math.floor((i + j) / 2);
    if (array[mid] === x) return mid;
    if (x < array[mid]) return BinarySearch(array, i, mid - 1, x);
    else return BinarySearch(array, mid + 1, j, x);
  }
};

const result = () => {
  const array = [3, 5, 7, 14, 45, 67, 89, 100, 106, 156];

  const SearchedIndex = BinarySearch(array, 0, array.length - 1, 156);
  console.log(SearchedIndex);
};
result();

/*
  Reccurance Relation for Time Complexity = T(n/2)+c    c= divide time + conquer time
                     
  Time Complexity  - 1(Constant) (Best case)
  Time Complexity  - log2(n) (Worst & Average case)

  stack size= log2(n)

   */
