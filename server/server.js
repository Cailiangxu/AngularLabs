const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// create express app
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
require('./routes/index')(app);
require('./routes/auth')(app);

// listen at port 3000
const port = 3000;
app.listen(port, () => {
  const date = new Date();
  console.log(`Server has been started at ${date}`);
  console.log(`Server is running on 127.0.0.1:${port}`);
});
