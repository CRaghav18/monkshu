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


// let submit = function () {


//     if (pass.value === '') {
//         h.textContent = "Enter Password"
//         h.style.color = "red";
//     } else if (pass.value !== confPass.value) {
//         h.textContent = 'password not matched'
//         h.style.color = 'red'

//     } else if (pass.value === confPass.value) {
//         h.textContent = ''

//     }

//     data.userName = userName.value
//     data.gmail = gmail.value
//     data.pass = pass.value



//     fetch(Backend_URL + '/SignUp', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     }
//     )
//         .then()
//         .catch()

// }

let login = function () {

    cred.mail = logmail.value
    cred.pass = logpass.value

    fetch(Backend_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cred)
    }
    )
        .then(async (user) => {

            let data = await user.json();

            if (!data.err) {
                let token = data[0].Token
                let type = data[0].Type
                let Username = data[0].Username

                console.log(data[0]);

                localStorage.setItem('token', token);
                localStorage.setItem('type', type)
                localStorage.setItem('Username', Username)

                if (logpass.value === '') {
                    h.textContent = "Enter Password"
                    h.style.color = "red";

                } else {
                    h.textContent = '';
                }

                if (data[0]) {
                    window.location.href = 'http://127.0.0.1:5500/training/frontend/Dashboard.html'

                } else { console.log('not working'); }
            } else {
                showError(data.err);
            }
        })
        .catch((error) => {
            showError(error.message);
        });
};


let showError = function (err) {

    h.textContent = err
    h.style.color = "red";

}






