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


let signIn = function () {

    overlay.style.display = 'block';
}

let signUp = function () {

    overlay2.style.display = 'block'
}


let hide = function () {

    overlay.style.display = 'none';
    overlay2.style.display = 'none'

}


let submit = function () {


    if (pass.value === '') {
        h.textContent = "Enter Password"
        h.style.color = "red";
    } else if (pass.value !== confPass.value) {
        h.textContent = 'password not matched'
        h.style.color = 'red'

    } else if (pass.value === confPass.value) {
        h.textContent = ''

    }

    data.userName = userName.value
    data.gmail = gmail.value
    data.pass = pass.value



    fetch('http://localhost:3000/SignUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    )
        .then()
        .catch()

}

let login = function () {

    cred.mail = logmail.value
    cred.pass = logpass.value

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cred)
    }
    )
        .then(async (user) => {

            let data = await user.json();

            console.log(data);
            if (!data.err) {
                let token = data[0].Token
                let type = data[0].Type

                localStorage.setItem('token', token);
                localStorage.setItem('type', type)

                if (logpass.value === '') {
                    h.textContent = "Enter Password"
                    h.style.color = "red";

                } else {
                    h.textContent = '';
                }

                if (data[0].Type === "Librarian") {
                    window.location.href = 'http://127.0.0.1:5500/training/frontend/librarian.html'
                } else if (data[0].Type === "Member") {
                    window.location.href = 'http://127.0.0.1:5500/training/frontend/Dashboard.html'
                } else if (data[0].Type === "Admin") { window.location.href = 'http://127.0.0.1:5500/training/frontend/admin.html' }

                else { console.log('not working'); }
            } else {
                showError(data.err);
            }
        })
        .catch((error) => {
            console.error('Error:', error.message);
            // alert('An error occurred: ' + error.message);
        });
};


let showError = function (err) {

    h.textContent = err
    h.style.color = "red";

}






