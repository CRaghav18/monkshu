'use strict';

let overlay = document.querySelector('.overlay');
let overlay2 = document.querySelector('.overlay2');
let removeBook = document.querySelector('.table');

let userName = document.querySelector('.name')
let post = document.querySelector('.post')

let Username = localStorage.getItem('Username')
let type = localStorage.getItem('type');


function info() {

    userName.innerHTML = Username
    post.innerHTML = type
}


function addU() {

    overlay2.style.display = 'block';
    removeBook.style.visibility = 'hidden';
    overlay.style.display = 'none';

}

function hide() {
    removeBook.style.visibility = 'hidden';
    overlay.style.display = 'none';
    overlay2.style.display = 'none';
}

function hide2() {
    removeBook.style.visibility = 'hidden';
    overlay.style.display = 'none';
    overlay2.style.display = 'none';
}

function home() {
    removeBook.style.visibility = 'hidden';
    overlay.style.display = 'none';
    overlay2.style.display = 'none';

}

function addB() {
    overlay.style.display = 'block';
    overlay2.style.display = 'none';
    removeBook.style.visibility = 'hidden';


}

function logOut() {
    window.location.href = 'http://127.0.0.1:5500/training/frontend/Login_Pg.html';
}


if (type == 'Admin') {

    info()

    document.getElementById('home').addEventListener('click', home);
    document.getElementById('addU').addEventListener('click', addU);
    document.getElementById('hide').addEventListener('click', hide);
    document.getElementById('hide2').addEventListener('click', hide2);
    document.getElementById('myBooks').style.display = 'none'
    document.getElementById('addB').style.display = 'none'



} else if (type == 'Librarian') {

    info()


    document.getElementById('home').addEventListener('click', home);
    document.getElementById('addU').addEventListener('click', addU);
    document.getElementById('hide').addEventListener('click', hide);
    document.getElementById('hide2').addEventListener('click', hide2);
    document.getElementById('addB').addEventListener('click', addB);
    document.getElementById('myBooks').style.display = 'none'


} else if (type == 'Member') {

    info()


    document.getElementById('home').addEventListener('click', home);
    document.getElementById('addU').style.display = 'none'
    document.getElementById('addB').style.display = 'none'
    document.getElementById('getUser').style.display = 'none'

} else {

    console.log('Unknown User');
}

document.getElementById('logOut').addEventListener('click', logOut);


