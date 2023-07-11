'use strict'

import express from 'express'
import sqlite3 from 'sqlite3'
import cors from "cors";

const app = express();
const PORT = 3000

import bodyParser from "body-parser";

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const db = new sqlite3.Database('../db/test.db',(err) =>{

if (err){
    return console.error(err.message)
}
else {
    console.log('Database working');
}

})


import testing from '../../signUp.js'




app.get('/SignUp',(req,res)=> {
    res.send('Backend working')
    console.log(testing(db));
    console.log(req.body)
    
})

app.listen(PORT)

