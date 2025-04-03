let min, max;
const DACMinMax = (array, i, j) => {
  if (i == j) {
    max = min = a[i];
    return { max: max, min: min };
  }
  if (j - i == 1) {
    if (array[j] > array[i]) {
      max = array[j];
      min = array[i];
    } else {
      min = array[j];
      max = array[i];
    }
    return { max: max, min: min };
  } else {
    const mid = Math.floor((i + j) / 2);
    const leftResult = DACMinMax(array, i, mid);
    const rightResult = DACMinMax(array, mid + 1, j);

    leftResult.max > rightResult.max
      ? (max = leftResult.max)
      : (max = rightResult.max);

    leftResult.min < rightResult.min
      ? (min = leftResult.min)
      : (min = rightResult.min);

    return { max: max, min: min };
  }
};

const result = () => {
  const array = [245, 23, 67, 78, 43, 78, 23, 6, 1, 89, 56, -129, 38, 99, 345, 56];

  const MinMaxResult = DACMinMax(array, 0, array.length - 1);
  console.log(MinMaxResult.max, MinMaxResult.min);
};
result();


{
  /*
  Reccurance Relation for Time Complexity = 2T(n/2)+c    c= divide time + conquer time
  Time Complexity  = θ(n)

  Reccurance Relation for number of comparisons = 2T(n/2)+2    
  Time Complexity  = (1.5n - 2) = θ(n)

   */
}