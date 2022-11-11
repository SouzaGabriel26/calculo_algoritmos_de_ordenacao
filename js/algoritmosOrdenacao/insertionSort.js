function insertionSort(array) {
  let i, j, temp

  for (i = 1; i < array.length; i++) {
    temp = array[i]
    j = i - 1
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = temp
  }
  console.log(array)
  return array
}

module.exports = insertionSort

/* 
COMPLEXIDADE COMPUTACIONAL: 

  - Notação O: Θ(n^2)

  - MELHOR CASO: vetor ordenado
    C(n) = n-1
    M(n) = 2n-2

  - PIOR CASO: vetor inversamente ordenado
    C(n) = (n^2 - n) / 2
    M(n) = (n^2 + 3n - 4) / 2
*/
