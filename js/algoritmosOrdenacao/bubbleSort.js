function bubbleSort(array) {
  let LSup, i, j, temp
  LSup = array.length - 1
  do {
    j = 0
    for (i = 0; i < LSup; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        j = i
      }
    }
    LSup = j
  } while (LSup >= 1)

  console.log(array)
  return array
}

module.exports = bubbleSort

/*
COMPLEXIDADE COMPUTACIONAL: 

  - Notação O:  Θ(n^2)

  - MELHOR CASO: vetor ordenado
      C(n) = n-1

      M(n) = 0
  
  - PIOR CASO: vetor ordenado decrescentemente
      C = (n^2 - n) / 2

      M = 3(n^2 - n) / 2
*/
