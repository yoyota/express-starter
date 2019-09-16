const router = require('express').Router({ mergerParams: true })
const exampleRouter = require('./exampleCenter/exampleRouter')

router.get('/', (req, res) => {
  res.send('api home')
})

router.use('/example', exampleRouter)

module.exports = router
