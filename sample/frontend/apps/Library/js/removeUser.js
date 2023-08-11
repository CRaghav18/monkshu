'use strict'

let token = localStorage.getItem('token')

const removeUser = function (userName) {

    let data = {}

    data.token = localStorage.getItem('token');
    data.userName = userName

    fetch(Backend_URL + '/removeUser', {
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
                alert('User Deleted Successfully');
                window.location.reload();
            } else {
                showError('There is some error')
            }
        }).catch(async (err) => {

            showError(await err)
        })
};


export default removeUser