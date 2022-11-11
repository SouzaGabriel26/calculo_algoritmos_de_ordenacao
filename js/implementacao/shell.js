const shellShort = require("../algoritmosOrdenacao/shellSort")
const randomGenerate = require("../randomNumbers/randomNumberGenerator")

// let array100 = []
// randomGenerate(array100, 100, "desc")
// console.time("#shell")
// shellShort(array100)
// console.timeEnd("#shell")

// let array1000 = []
// randomGenerate(array1000, 1000, "desc")
// console.time("#shell")
// shellShort(array1000)
// console.timeEnd("#shell")

// let array10000 = []
// randomGenerate(array10000, 10000, "desc")
// console.time("#shell")
// shellShort(array10000)
// console.timeEnd("#shell")

// let array100000 = []
// randomGenerate(array100000, 100000, "desc")
// console.time("#shell")
// shellShort(array100000)
// console.timeEnd("#shell")

let array1000000 = []
randomGenerate(array1000000, 1000000, "desc")
console.time("#shell")
shellShort(array1000000)
console.timeEnd("#shell")
