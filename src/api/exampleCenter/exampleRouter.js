const router = require("express").Router()
const { catchErrors } = require("../../util")

const { example, asyncExample } = require("./exampleCenter")

router.get("/", example)
router.get("/async", catchErrors(asyncExample))

module.exports = router
