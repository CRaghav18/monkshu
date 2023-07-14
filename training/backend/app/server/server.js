'use strict'

import express from 'express'
import sqlite3 from 'sqlite3'
import cors from "cors";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// import auth from '/Users/raghav/Documents/DLT/monkshu/training/middleware.js'


dotenv.config()



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
    var salt = bcrypt.genSaltSync(10)
}

})


import testing from '../../signUp.js'

import login from '../../login.js'

import getBooks from '../../getBooks.js'





app.post('/SignUp',(req,res)=> {
   
    testing(db, req.body);

    // console.log(req.body)
    
})

app.post('/login',(req,res)=>{


login(db, req.body, res)



})

app.get('/getBooks',(req,res)=>{

getBooks(db, res)

})

app.listen(PORT)

