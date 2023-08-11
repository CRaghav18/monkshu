'use strict'

let Backend_URL = 'http://localhost:9090/apis'
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

    if (logpass.value === '') {
        h.textContent = "Enter Password"
        h.style.color = "red";
        return;
    } else {
        h.textContent = '';
    }


    fetch(Backend_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cred)

    }).then(async (response) => {

        const accessToken = response.headers.get('Access_token');
        let result = await response.json();

        if (accessToken && result) {

            let data = result.message.user;
            if (data) {
                let token = accessToken;
                let type = data.Role
                let Username = data.UserName

                console.log(data);
                console.log(token);
                console.log(type);
                console.log(Username);

                localStorage.setItem('token', token);
                localStorage.setItem('type', type)
                localStorage.setItem('Username', Username)

                window.location.href = 'http://127.0.0.1:8080/apps/Library/Dashboard.html'

            } else { console.log('not working'); }
        } else {
            showError(result.message);
        }
    })
        .catch((error) => {
            showError(error);
        });
};


let showError = function (err) {

    h.textContent = err
    h.style.color = "red";

}






