
const removeUser = function (userName) {

    let data = {}

    data.token = localStorage.getItem('token');
    data.userName = userName

    fetch('http://localhost:3000/removeUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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