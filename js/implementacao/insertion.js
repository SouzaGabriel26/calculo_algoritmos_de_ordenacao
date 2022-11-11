const insertionSort = require("../algoritmosOrdenacao/insertionSort")
const randomGenerate = require("../randomNumbers/randomNumberGenerator")

// let array100 = []
// randomGenerate(array100, 100, "desc")
// console.time("#insertion")
// insertionSort(array100)
// console.timeEnd("#insertion")

// let array1000 = []
// randomGenerate(array1000, 1000, "random")
// console.time("#insertion")
// insertionSort(array1000)
// console.timeEnd("#insertion")

// let array10000 = []
// randomGenerate(array10000, 10000, "desc")
// console.time("#insertion")
// insertionSort(array10000)
// console.timeEnd("#insertion")

// let array100000 = []
// randomGenerate(array100000, 100000, "desc")
// console.time("#insertion")
// insertionSort(array100000)
// console.timeEnd("#insertion")

let array1000000 = []
randomGenerate(array1000000, 1000000, "order")
console.time("#insertion")
insertionSort(array1000000)
console.timeEnd("#insertion")
