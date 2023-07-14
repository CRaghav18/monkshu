'use strict'

let overlay = document.querySelector('.overlay')
let overlay2 = document.querySelector('.overlay2')
let userName = document.querySelector('#userName')
let gmail = document.querySelector('#gmail')
let pass = document.querySelector('#pass')
let confPass = document.querySelector('#confPass')
let h = document.querySelector('.h')

let logmail = document.querySelector('#logmail')
let logpass = document.querySelector('#logpass')

let data = {}
let cred = {}


let signIn = function(){
    
    overlay.style.display = 'block';
}

let signUp = function(){

    overlay2.style.display = 'block'
}


let hide = function(){
    
    overlay.style.display = 'none';
    overlay2.style.display = 'none'

}


let submit = function(){

    
    if(pass.value === ''){
        h.textContent = "Enter Password"
        h.style.color = "red";
    } else if(pass.value !== confPass.value){
        h.textContent = 'password not matched'
        h.style.color = 'red'

    }else if(pass.value === confPass.value){
        h.textContent = ''

    }

    data.userName = userName.value
    data.gmail = gmail.value
    data.pass = pass.value
    
    

fetch('http://localhost:3000/SignUp',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)}
)
.then()
.catch()

}

let login = function(){

    cred.mail = logmail.value
    cred.pass = logpass.value


    fetch('http://localhost:3000/login',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(cred)}
)
.then()
.catch()

}






