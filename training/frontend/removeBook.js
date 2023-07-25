
const removeBook = function () {

    let data = {}

    data.token = localStorage.getItem('token');

    fetch('http://localhost:3000/removeBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    )
        .then(async (data) => {



        }).catch(async (err) => {

            console.log(err.message);

        })
};

export default removeBook