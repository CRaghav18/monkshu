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
        .then(async (response) => {

            let result = await response.json()

            if (result.result) {
                alert('Book Deleted Successfully');
                window.location.reload();
            } else {
                showError('There is some error')
            }
        }).catch(async (err) => {

            showError(await err)
        })
};


export default removeBook