'use strict'


let token = localStorage.getItem('token')

const bookReturn = function (isbn, bookName) {

    let data = {}

    data.token = localStorage.getItem('token');
    data.isbn = isbn
    data.bookName = bookName
    data.UserName = localStorage.getItem('Username')


    fetch(Backend_URL + '/bookReturn', {
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

                alert(result.err);
                return

            } else {
                alert(result.message);
            }


        }).catch(async (err) => {

            console.log(await err);

        })
};


export default bookReturn