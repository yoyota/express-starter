const express = require("express")
const bodyParser = require("body-parser")
const compression = require("compression")
const helmet = require("helmet")
const cors = require("cors")
const api = require("./api/index")
const { logger, developmentErrors, productionErrors } = require("./util")

const { NODE_ENV, PORT } = process.env
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.use(helmet())
app.use(cors())

app.get("/", (req, res) => {
  res.send("app home")
})

app.use("/api", api)

const errorHandler =
  NODE_ENV === "production" ? productionErrors : developmentErrors
app.use(errorHandler)

app.listen(PORT || 5000, () => {
  logger.info(`Server start! listening on ${PORT || 5000}`)
})

module.exports = app
