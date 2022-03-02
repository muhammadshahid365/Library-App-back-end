const express = require('express');
const router = require('./routes');

const PORT = 8080;
const app = express();
app.use(express.json());
app.use('/', router)

app.listen(PORT, () =>{
  console.log(`Listning on port ${PORT}`);
})