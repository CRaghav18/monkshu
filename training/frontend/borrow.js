'use strict'


let token = localStorage.getItem('token')

const borrow = function (isbn, bookName) {

    let data = {}

    data.token = localStorage.getItem('token');
    data.isbn = isbn
    data.bookName = bookName
    data.UserName = localStorage.getItem('Username')


    fetch('http://localhost:3000/borrow', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify(data)
    }
    )
        .then(async (data) => {

            let result = await data.json()

            if (result.err) {

                console.log(result.err);
                return

            } else { console.log(message); }
            const book = document.getElementById(isbn);
            if (book) {
                console.log('Book has been added');
                ;
            }

        }).catch(async (err) => {

            console.log(await err.message);

        })
};


export default borrow