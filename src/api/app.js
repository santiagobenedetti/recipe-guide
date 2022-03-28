const morgan = require('morgan');
const express = require('express');
const routes = require('./routes/index')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(morgan("tiny"))
app.use(cors())

app.use('/', routes)

const port = 3001
app.listen(port, () => {
  console.log('Listening on port ' + port);
})