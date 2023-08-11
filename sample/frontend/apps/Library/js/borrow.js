'use strict'


let token = localStorage.getItem('token')

const borrow = function (isbn, bookName) {

    let data = {}

    data.token = localStorage.getItem('token');
    data.isbn = isbn
    data.bookName = bookName
    data.UserName = localStorage.getItem('Username')


    fetch(Backend_URL + '/borrow', {
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
                return (result.err)
            }
        }).catch(async (err) => {

            return (await err)
        })
    // const book = document.getElementById(isbn);
    // if (book) {
    //     console.log('Book has been added');
    //     ;
    // }
};

export default borrow
