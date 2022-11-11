function partition(array, left, right) {
  let temp
  let pivot = array[Math.floor((right + left) / 2)], // meio
    i = left,
    j = right
  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
      i++
      j--
    }
  }
  return i
}

function quickSort(array, left, right) {
  var index
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quickSort(array, left, index - 1)
    }
    if (index < right) {
      quickSort(array, index, right)
    }
  }
  return array
}

module.exports = quickSort

/* 
COMPLEXIDADE COMPUTACIONAL: 

  - Notação O: θ(n log(n))
*/
