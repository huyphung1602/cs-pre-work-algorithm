// Checkpoint 5 -- Problem 2
function longestConsecutive(array) {
  if (array.length === 1) {
    return 1;
  }

  array.sort(function (previous, current) {
    if (current >= previous) {
      return -1;
    }
    return 1;
  });

  let max = 1;
  let counter = 1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      continue;
    }

    if (array[i] - 1 === array[i - 1]) {
      counter++;
    } else {
      counter = 1;
    }

    max = counter > max ? counter : max;
  }

  return max;
};

// Test
longestConsecutive([100, 4, 200, 1, 3, 2])
