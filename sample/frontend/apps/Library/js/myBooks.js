import { myBooksTable } from './myBooksTable.js';

let token = localStorage.getItem('token')


export const myBooks = function () {

    document.querySelector('.books').style.visibility = 'visible'
    document.querySelector('.table').style.visibility = 'hidden'

    document.querySelector('.overlay').style.display = 'none'
    document.querySelector('.overlay2').style.display = 'none'



    let data = {}

    data.token = localStorage.getItem('token');
    data.UserName = localStorage.getItem('Username')

    fetch(Backend_URL + '/myBooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify(data)
    }
    )
        .then(async (data) => {

            let bookData = await data.json()

            myBooksTable(bookData)


        }).catch(async (err) => {

            console.log(err.message);

        })
};


let UserBooks = document.getElementById("myBooks")

UserBooks.addEventListener("click", myBooks);


