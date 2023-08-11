'use strict'

const text = document.querySelector('.text1')

let token = localStorage.getItem('token')

export const addBook = function () {

    let data = {}

    data.title = document.getElementById('name').value;
    data.author = document.getElementById('author').value
    data.ISBN = document.getElementById('ISBN').value
    data.access = document.getElementById('access').value
    data.price = document.getElementById('price').value
    data.shelf = document.getElementById('shelf').value
    data.row = document.getElementById('row').value
    data.quantity = document.getElementById('quantity').value



    data.token = localStorage.getItem('token');

    fetch(Backend_URL + '/addBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }
    )
        .then(async (response) => {

            let result = await response.json()

            console.log(result);

            if (result.result) {
                alert('Book Added Successfully');
                window.location.reload();
            } else {
                showError(result.err)
            }
        }).catch(async (err) => {

            showError(await err)
        })
};

const showError = (error) => {

    text.textContent = JSON.stringify(error)
    text.style.color = "red";

}

document.getElementById('addBook').addEventListener('click', addBook)