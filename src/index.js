const express = require("express");
const connectDB = require("./db/dbconnection");
const router = require("./router");

const app = express()

app.use(express.json())

app.listen(5500, () => {
    console.log("Hello Guys Server is Online...");
})

connectDB()

app.use("/v1",router)


app.use((req, res, next) => {
    throw new Error("Route Not Found !!!")
})