// Checkpoint 5 - problem 1 -- Solution 1
function uniquePermutations(array) {
  const permutationArrays = getAllPermutations(array);
  const checkNotExistHash = {};
  let results = [];


  for (let permutationArray of permutationArrays) {
    const string = permutationArray.join('');

    if (!checkNotExistHash[string]) {
      results.push(permutationArray);
      checkNotExistHash[string] = true;
    }
  }

  console.log(results);
  return results;
}

function getAllPermutations(array) {
  let results = [];

  if (array.length === 1) {
    results.push(array);
    return results;
  }

  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    let numsLeft = array.slice(0, i).concat(array.slice(i + 1, array.length));
    let innerPermutations = getAllPermutations(numsLeft);

    for (let j = 0; j < innerPermutations.length; j++) {
      results.push([firstNum].concat(innerPermutations[j]));
    }
  }

  return results;
}

// Example
uniquePermutations([1,1,2]);
