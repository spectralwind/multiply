module.exports = function multiply(first, second) {
  const firstArray = first.split('').reverse();
  const secondArray = second.split('').reverse();
  let result = [];

  for (let iterFirstArray = 0; iterFirstArray < firstArray.length; iterFirstArray++) {
    for (let iterSecondArray = 0; iterSecondArray < secondArray.length; iterSecondArray++) {
      let position = iterFirstArray + iterSecondArray;
      result[position] = firstArray[iterFirstArray] * secondArray[iterSecondArray] + (position >= result.length ? 0 : result[position]);
    
      if (result[position] >= 10) {
        result[position + 1] = Math.floor(result[position] / 10) + (position + 1 >= result.length ? 0 : result[position + 1]);
        result[position] %= 10;
      }
    } 
  }
  return result.reverse().join('');
}
