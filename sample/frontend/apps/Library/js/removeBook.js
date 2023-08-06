'use strict'

let token = localStorage.getItem('token')

const removeBook = function (isbn) {

    let data = {}

    data.token = localStorage.getItem('token');
    data.isbn = isbn

    fetch(Backend_URL + '/removeBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify(data)
    }
    )
        .then(async (data) => {

            if (data) {

                const book = document.getElementById(isbn);
                if (book) {
                    book.remove();
                }

                console.log('Book has been deleted');

            } else { console.log('there was some error'); }

        }).catch(async (err) => {

            console.log(err.message);

        })
};


export default removeBook