'use strict';

let overlay = document.querySelector('.overlay');
let overlay2 = document.querySelector('.overlay2');
let hideBook = document.querySelector('.table');
let removeMyBook = document.querySelector('.books');

let getBooksBtn = document.getElementById('getBooks')

let myBooksBtn = document.getElementById('myBooks')

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
    hideBook.style.visibility = 'hidden';
    overlay.style.display = 'none';

}

function hide() {
    hideBook.style.visibility = 'hidden';
    overlay.style.display = 'none';
    overlay2.style.display = 'none';
}

function hide2() {
    hideBook.style.visibility = 'hidden';
    overlay.style.display = 'none';
    overlay2.style.display = 'none';
}

function home() {
    hideBook.style.visibility = 'hidden';
    removeMyBook.style.visibility = 'hidden';

    overlay.style.display = 'none';
    overlay2.style.display = 'none';

}

function addB() {
    overlay.style.display = 'block';
    overlay2.style.display = 'none';
    hideBook.style.visibility = 'hidden';
    removeMyBook.style.visibility = 'hidden';



}

function getbooks() {

    hideBook.style.display = 'table'
    removeMyBook.style.display = 'none'

}

function myBooks() {

    hideBook.style.display = 'none'
    removeMyBook.style.display = 'table'

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
    myBooksBtn.style.display = 'none'




} else if (type == 'Librarian') {

    info()


    document.getElementById('home').addEventListener('click', home);
    document.getElementById('addU').addEventListener('click', addU);
    document.getElementById('hide').addEventListener('click', hide);
    document.getElementById('hide2').addEventListener('click', hide2);
    document.getElementById('addB').addEventListener('click', addB);
    myBooksBtn.style.display = 'none'



} else if (type == 'Member') {

    info()


    document.getElementById('home').addEventListener('click', home);
    document.getElementById('addU').style.display = 'none'
    document.getElementById('addB').style.display = 'none'
    document.getElementById('getUser').style.display = 'none'
    getBooksBtn.addEventListener('click', getbooks)
    myBooksBtn.addEventListener('click', myBooks)

} else {

    console.log('Unknown User');
}

document.getElementById('logOut').addEventListener('click', logOut);


