const Power = (base, pow) => {
  if (base === 0) return 0;
  if (pow === 1) return base;
  else {
    mid = Math.floor(pow / 2); //divide

    let b = Power(base, mid); //conquer
    c = b * b; // combine

    if (pow % 2 === 0) {
      return c;   // if n is even
    } else {
      // if n is odd, 1 multiplication left
      return c * base; // combine
    }
  }
};

const result = Power(2, 5);
console.log(result);



  /* Recurrance relation of Time Complexity = T(n/2)+c
     Time Complexity = log2(n)

    Recurrance relation of Multiplication = T(n/2)+1  if n=even
    Time Complexity = log2(n)

 */

