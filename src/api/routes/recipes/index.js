const { Router} = require("express");
const router = Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  var recipes = await axios('http://localhost:3002')
      .then(r => res.send(r.data.results))
      .catch(e => {console.log(e); res.send({results: []})});
})

module.exports = router;