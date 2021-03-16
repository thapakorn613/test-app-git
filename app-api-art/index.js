const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json({ message: "Ahoy!" })
})

app.get("/data", (req, res) => {
    // ? SHOW
    res.json({ message: "get DATA" })
})

app.get("/profile", (req, res) => {
    // ? SHOW
    res.json({ name: "Thapakorn Phoeypghon ", nickname:"ArtRonin" })
})

app.delete("/profile", (req, res) => {
    // ! Delete Profile Data
    res.json({ message: "delete profile DATA" })
})

app.post("/data", (req, res) => {
    // ?  CREATE 
    res.json({ message: "create DATA" })
})

app.put("/data", (req, res) => {
    //?  UPDATE
    res.json({ message: "updated DATA" })
})

app.delete("/data", (req, res) => {
    // ! DELETE 
    res.json({ message: "delete DATA " })
})

app.listen(9000, () => {
    console.log("Application is running on port 9000")
})
