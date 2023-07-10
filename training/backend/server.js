'use strict'

import express from 'express'

const app = express();
const PORT = 3000




import testing from './signUp.js'




app.get('/signup',(req,res)=> {
    res.send('Backend working')
    console.log(testing());
    
})

app.listen(PORT)

