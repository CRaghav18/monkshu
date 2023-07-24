'use strict'


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

document.getElementById('addBook').addEventListener('click', addBook)