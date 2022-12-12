const bubbleSort = require("../algoritmosOrdenacao/bubbleSort")
const randomGenerate = require("../randomNumbers/randomNumberGenerator")

let array100 = []
randomGenerate(array100, 100, "random")
console.time("#bubbleSort")
bubbleSort(array100)
console.timeEnd("#bubbleSort") 

// let array1000 = []
// randomGenerate(array1000, 1000, "desc")
// console.time("#bubble")
// bubbleSort(array1000)
// console.timeEnd("#bubble")

// let array10000 = []
// randomGenerate(array10000, 10000, "desc")
// console.time("#bubble")
// bubbleSort(array10000)
// console.timeEnd("#bubble")

// let array100000 = []
// randomGenerate(array100000, 100000, "desc")
// console.time("#bubble")
// bubbleSort(array100000)
// console.timeEnd("#bubble")

// let array1000000 = []
// randomGenerate(array1000000, 1000000, "desc")
// console.time("#bubble")
// bubbleSort(array1000000)
// console.timeEnd("#bubble")
