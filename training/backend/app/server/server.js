'use strict'

import express from 'express'
import sqlite3 from 'sqlite3'
import cors from "cors";
import dotenv from 'dotenv'
// import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import jwtAuth from '../../../middleware.js'
import testing from '../../signUp.js'
import login from '../../login.js'
import getBooks from '../../getBooks.js'
import getUser from '../../getUser.js';
import addBook from '../../addBook.js'
import removeBook from '../../removeBook.js'
import addUser from '../../addUser.js';
import removeUser from '../../removeUser.js';


dotenv.config()


const app = express();
const PORT = 3000

import bodyParser from "body-parser";

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = new sqlite3.Database('../db/test.db', (err) => {
    if (err) {
        return console.error(err.message)
    }
    else {
        console.log('Database working');
        var salt = bcrypt.genSaltSync(10)
    }
})

app.post('/SignUp', (req, res) => {
    testing(db, req.body);
})

app.post('/login', (req, res) => {

    login(db, req.body, res)
})


app.post('/getBooks', jwtAuth, (req, res) => {
    getBooks(db, res)
})

app.post('/getUser', jwtAuth, (req, res) => {
    getUser(db, req, res)

})

app.post('/addBook', jwtAuth, (req, res) => {
    addBook(db, req, res)
})

app.post('/removeBook', jwtAuth, (req, res) => {
    removeBook(db, req, res)
})

app.post('/addUser', jwtAuth, (req, res) => {
    addUser(db, req, res)
})

app.post('/removeUser', jwtAuth, (req, res) => {
    removeUser(db, req, res)
})

app.listen(PORT)

