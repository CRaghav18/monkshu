'use strict'

let overlay = document.querySelector('.overlay')

let LogOut = document.getElementById('LogOut')

let removeBook = document.querySelector('.table')




LogOut.addEventListener('click', function () { window.location.href = 'http://127.0.0.1:5500/training/frontend/Login_Pg.html' })



const addL = function () {
    overlay.style.display = 'block'
    removeBook.style.visibility = 'hidden'

}

let hide = function () {

    overlay.style.display = 'none';


}

let home = function () {


    removeBook.style.visibility = 'hidden'
    overlay.style.display = 'none';





}


