'use strict'


export const addUser = function () {

    let data = {}

    data.userName = document.getElementById('userName').value;
    data.email = document.getElementById('email').value
    data.pass = document.getElementById('pass').value
    data.type = document.getElementById('dropDown').value

    data.token = localStorage.getItem('token');

    fetch('http://localhost:3000/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    )
        .then(async (data) => {

            console.log(await data.json());

        }).catch(async (err) => {

            console.log(err.message);

        })
};

document.getElementById('addUser').addEventListener('click', addUser)