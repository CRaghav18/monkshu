'use strict'

let overlay = document.querySelector('.overlay')

let LogOut = document.getElementById('LogOut')



LogOut.addEventListener('click', function () { window.location.href = 'http://127.0.0.1:5500/training/frontend/Login_Pg.html' })



const addL = function () {
    overlay.style.display = 'block'
}

let hide = function () {

    overlay.style.display = 'none';


}
