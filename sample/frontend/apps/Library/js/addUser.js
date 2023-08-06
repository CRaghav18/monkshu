'use strict'

let text = document.querySelector('.text2')
let token = localStorage.getItem('token')



export const addUser = function () {

    let data = {}

    data.userName = document.getElementById('userName').value;
    data.email = document.getElementById('email').value
    data.pass = document.getElementById('pass').value
    data.type = document.getElementById('dropDown').value

    data.token = localStorage.getItem('token');

    fetch(Backend_URL + '/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify(data)
    }
    )
        .then(async (data) => {
            const newData = await data.json()
            console.log(newData);
            showError(newData.err)

        }).catch(async (err) => {

            showError(await err)
        })
};

document.getElementById('addUser').addEventListener('click', addUser)

let showError = (error) => {
    text.textContent = JSON.stringify(error)
    text.style.color = "red";

}