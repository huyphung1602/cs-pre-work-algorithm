// Checkpoint 3 - Problem 2
function numRange(arr, range) {
  var current = []
  var sum = 0;
  var longestVal = 0;

  arr.forEach((val) => {
    current.push(val);
    sum += val;
    
    while (sum > range[1]) {
      sum -= current.shift();
    }
      
    if (inRange(sum, range) && current.length > longestVal) {
      longestVal = current.length - 1;
    }
  })

  return longestVal || [-1]
}

function inRange(num, range) {
  if (num >= range[0] && num <= range[1]) {
    return true;
  } else {
    return false;
  }
}
