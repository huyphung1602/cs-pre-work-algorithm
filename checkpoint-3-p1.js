// Checkpoint 3 -- problem 1

function kthSmallest(array, k) {
  if (array.length === 0 || array.length < k) {
    return -1;
  }

  let lo = Math.min(...array);
  let hi = Math.max(...array);

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo)/2);
    let countLess = 0;
    let countEqual = 0;
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] < mid) {
        countLess++;
      } else if (array[i] === mid) {
        countEqual++;
      }
      if (countLess >= k) {
        break;
      }
    }
    
    if (countLess < k && countLess + countEqual >= k) {
      console.log(mid);
      console.log(array);
      return mid;
    } else if (countLess >= k) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
}
