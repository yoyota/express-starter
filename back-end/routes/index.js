const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/r', (req, res) => {
  res.json({ data: req.query.q });
});

router.get('/test', (req, res) => {
  res.send('it works');
});

module.exports = router;
