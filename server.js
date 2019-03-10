const express = require('express');
const messages = require('./messages');
const app = express();
app.use(express.json());
const port = 8000 ;

app.use('/messages', messages);

app.listen(port, ()=>{
    console.log(`Server started on ${port} port!`);
});