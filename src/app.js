const express = require("express")
const compression = require("compression")
const helmet = require("helmet")
const apiRouter = require("./routes/api")

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(compression())
app.use(helmet())

app.get("/healthz", (_, res) => {
  res.status(204).send()
})

app.get("/", (_, res) => {
  res.send("home")
})

app.use("/api", apiRouter)

module.exports = app
