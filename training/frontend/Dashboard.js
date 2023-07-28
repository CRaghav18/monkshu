'use strict';

let overlay = document.querySelector('.overlay');
let overlay2 = document.querySelector('.overlay2');
let removeBook = document.querySelector('.table');

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

let type = localStorage.getItem('type');

if (type == 'Admin') {

    document.getElementById('home').addEventListener('click', home);
    document.getElementById('addU').addEventListener('click', addU);
    document.getElementById('hide').addEventListener('click', hide);
    document.getElementById('hide2').addEventListener('click', hide2);



} else if (type == 'Librarian') {

    document.getElementById('home').addEventListener('click', home);
    document.getElementById('addU').addEventListener('click', addU);
    document.getElementById('hide').addEventListener('click', hide);
    document.getElementById('hide2').addEventListener('click', hide2);
    document.getElementById('addB').addEventListener('click', addB);

} else if (type == 'Member') {

    document.getElementById('home').addEventListener('click', home);


    document.getElementById('addU').addEventListener('click', addU);
    document.getElementById('hide').addEventListener('click', hide);
    document.getElementById('hide2').addEventListener('click', hide2);
    document.getElementById('addB').addEventListener('click', addB);


} else {

    console.log('Unknown User');
}

document.getElementById('logOut').addEventListener('click', logOut);

