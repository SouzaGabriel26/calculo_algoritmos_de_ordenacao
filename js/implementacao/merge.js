const mergeSort = require("../algoritmosOrdenacao/mergeSort")
const randomGenerate = require("../randomNumbers/randomNumberGenerator")

// let array100 = []
// randomGenerate(array100, 100, "desc")
// console.log(mergeSort(array100))
// console.time("merge")
// mergeSort(array100)
// console.timeEnd("merge")

// let array1000 = []
// randomGenerate(array1000, 1000, "desc")
// console.log(mergeSort(array1000))
// console.time("merge")
// mergeSort(array1000)
// console.timeEnd("merge")

// let array10000 = []
// randomGenerate(array10000, 10000, "desc")
// console.log(mergeSort(array10000))
// console.time("merge")
// mergeSort(array10000)
// console.timeEnd("merge")

// let array100000 = []
// randomGenerate(array100000, 100000, "random")
// console.log(mergeSort(array100000))
// console.time("merge")
// mergeSort(array100000)
// console.timeEnd("merge")

let array1000000 = []
randomGenerate(array1000000, 1000000, "order")
console.log(mergeSort(array1000000))
console.time("merge")
mergeSort(array1000000)
console.timeEnd("merge")
