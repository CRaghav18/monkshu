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
        .then(async (data) => {

            if (data) {

                const userRow = document.getElementById(userName);
                if (userRow) {
                    userRow.remove();
                }
                console.log('User has been deleted');

            } else { console.log('there was some error'); }

        }).catch(async (err) => {

            console.log(err.message);

        })
};


export default removeUser