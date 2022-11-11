const selectionSort = require("../algoritmosOrdenacao/selectionSort")
const randomGenerate = require("../randomNumbers/randomNumberGenerator")

// let array100 = []
// randomGenerate(array100, 100, "desc")
// console.time("#selection")
// selectionSort(array100)
// console.timeEnd("#selection")

// let array1000 = []
// randomGenerate(array1000, 1000, "desc")
// console.time("#selection")
// selectionSort(array1000)
// console.timeEnd("#selection")

// let array10000 = []
// randomGenerate(array10000, 10000, "desc")
// console.time("#selection")
// selectionSort(array10000)
// console.timeEnd("#selection")

// let array100000 = []
// randomGenerate(array100000, 100000, "order")
// console.time("#selection")
// selectionSort(array100000)
// console.timeEnd("#selection")

let array1000000 = []
randomGenerate(array1000000, 1000000, "order")
console.time("#selection")
selectionSort(array1000000)
console.timeEnd("#selection")
