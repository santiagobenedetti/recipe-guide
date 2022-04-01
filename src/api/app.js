const morgan = require('morgan');
const express = require('express');
const routes = require('./routes/index')
const cors = require('cors');
const env = require('dotenv').config();

const app = express();
app.use(express.json());
app.use(morgan("dev"))
app.use(cors())

app.use('/', routes)

const port = process.env.APP_PORT || 3001
app.listen(port, () => {
  console.log('Listening on port ' + port);
})