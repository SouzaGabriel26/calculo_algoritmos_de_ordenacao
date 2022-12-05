const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)))

app.use("/calcs", express.static(path.join(__dirname + "/public/calculo.html")))

app.listen(port, () => {
  console.log("server running on port 3000")
})
