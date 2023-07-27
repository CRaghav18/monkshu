'use strict'

let overlay = document.querySelector('.overlay')
let overlay2 = document.querySelector('.overlay2')



let addB = function () {


    overlay.style.display = 'block';
}

let hide = function () {

    overlay.style.display = 'none';
    overlay2.style.display = 'none';


}


let addU = function () {


    overlay2.style.display = 'block';
}

let LogOut = document.getElementById('LogOut')



LogOut.addEventListener('click', function () { window.location.href = 'http://127.0.0.1:5500/training/frontend/Login_Pg.html' })



