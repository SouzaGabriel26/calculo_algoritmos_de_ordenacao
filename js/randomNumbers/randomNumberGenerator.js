// array - vetor
// size - quantidade de numeros para gerar
// type - "order" / "desc" / "random"
// randomNumber - numeros aleatorios até 1000

function randomGenerate(array, size, type) {
  for (let i = 0; i < size; i++) {
    let randomNumber = Math.floor(Math.random() * size)
    array.push(randomNumber)
  }

  if (type.toLowerCase() === "order") {
    // retorna array ordenado crescentemente
    array.sort(function (a, b) {
      return a - b
    })
    console.log(array)
  } else if (type.toLowerCase() === "desc") {
    // retorna array ordenado decrescentemente
    array.sort(function (a, b) {
      return b - a
    })
    console.log(array)
  } else if (type.toLowerCase() === "random") {
    // retorna array aleatorio
    console.log(array)
  }
}

module.exports = randomGenerate
