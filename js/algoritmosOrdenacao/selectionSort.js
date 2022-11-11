function selectionSort(array) {
  let i, j, min, temp

  for (i = 0; i < array.length; i++) {
    min = i
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    temp = array[min]
    array[min] = array[i]
    array[i] = temp
  }
  console.log(array)
  return array
}

module.exports = selectionSort

/* 
COMPLEXIDADE COMPUTACIONAL: 

  - Notação O: Θ(n^2)

*/
