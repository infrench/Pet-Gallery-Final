const express = require('express')
const app = express()

const port = process.env.PORT || 5000
const path = require("path")

app.use(express.static("./client/build"))

const animalDir = path.resolve("./animals")

app.get("/animals/all", (req, res) => {
    res.sendFile(__dirname + "/animals/all-animals.json")
})

app.get("/animals/:animalId", (req, res) => {
    res.sendFile(path.join(animalDir, req.params.animalId + ".json"))
})

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})