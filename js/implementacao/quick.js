const quickSort = require("../algoritmosOrdenacao/quickSort")
const randomGenerate = require("../randomNumbers/randomNumberGenerator")

// let array100 = []
// randomGenerate(array100, 100, "desc")
// console.time("#quick")
// quickSort(array100, 0, array100.length - 1)
// console.timeEnd("#quick")
// console.log(array100)

// let array1000 = []
// randomGenerate(array1000, 1000, "desc")
// console.time("#quick")
// quickSort(array1000, 0, array1000.length - 1)
// console.timeEnd("#quick")
// console.log(array1000)

// let array10000 = []
// randomGenerate(array10000, 10000, "desc")
// console.time("#quick")
// quickSort(array10000, 0, array10000.length - 1)
// console.timeEnd("#quick")
// console.log(array10000)

// let array100000 = []
// randomGenerate(array100000, 100000, "order")
// console.time("#quick")
// quickSort(array100000, 0, array100000.length - 1)
// console.timeEnd("#quick")
// console.log(array100000)

let array1000000 = []
randomGenerate(array1000000, 1000000, "desc")
console.time("#quick")
quickSort(array1000000, 0, array1000000.length - 1)
console.timeEnd("#quick")
console.log(array1000000)
