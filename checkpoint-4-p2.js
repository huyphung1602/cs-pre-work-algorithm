// Checkpoint 4 - Problem 2
function nextGreater(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    const numsOnRight = array.slice(i, array.length);
    let newNum = -1;

    for (let j = 0; j < numsOnRight.length; j++) {
      if (currentNum < numsOnRight[j]) {
        newNum = numsOnRight[j];
        break;
      }
    }

    result.push(newNum);
  }

  return result;
}

// Test
nextGreater([4, 5, 2, 10]);
