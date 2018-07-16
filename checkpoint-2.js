// Print concentric rectangular pattern in a 2d matrix.
// Let us show you some examples to clarify what we mean.

function concentric(n) {
  const sqrSide = 2*n-1;
  const midpoint = Math.floor((2*n-1)/2);
  const resultArray = [];
  for (let row = 0; row < sqrSide; row++) {
    const subArray = Array(sqrSide);

    for (let column = 0; column < sqrSide; column++) {
      const distanceRow = Math.abs(row - midpoint);
      const distanceColumn = Math.abs(column - midpoint);
      if (distanceRow > distanceColumn) {
        subArray[column] = distanceRow + 1;
      } else {
        subArray[column] = distanceColumn + 1;
      }
    }

    resultArray.push(subArray);
  }

  return resultArray;
}
