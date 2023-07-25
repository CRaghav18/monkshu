
const removeBook = function (isbn) {

    let data = {}

    data.token = localStorage.getItem('token');
    data.isbn = isbn

    fetch('http://localhost:3000/removeBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    )
        .then(async (data) => {

            if (await data) {

                window.location.reload()

                console.log('Book has been deleted');

            } else { console.log('there was some error'); }

        }).catch(async (err) => {

            console.log(err.message);

        })
};


export default removeBook