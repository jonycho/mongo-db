require('dotenv').config();

require('./config/database')

const express = require('express');

const app = express();

const PORT = 4000;

app.set('port', PORT);

app.get('/',(req, res)=>{
    res.send('servidor creado');
})

app.listen(PORT, ()=> console.log('servidor corriendo en puerto '+ app.get('port')))

