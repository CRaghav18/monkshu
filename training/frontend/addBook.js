'use strict'

const text = document.querySelector('.text1')

let token = localStorage.getItem('token')

export const addBook = function () {

    let data = {}

    data.name = document.getElementById('name').value;
    data.author = document.getElementById('author').value
    data.ISBN = document.getElementById('ISBN').value
    data.access = document.getElementById('access').value
    data.price = document.getElementById('price').value
    data.shelf = document.getElementById('shelf').value
    data.row = document.getElementById('row').value


    data.token = localStorage.getItem('token');

    fetch('http://localhost:3000/addBook', {
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

            console.log(err.message);

        })
};

const showError = (error) => {

    text.textContent = JSON.stringify(error)
    text.style.color = "red";

}

document.getElementById('addBook').addEventListener('click', addBook)