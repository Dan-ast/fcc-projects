function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const count = max - min + 1;
  const sum = ( max + min ) * count / 2;
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
