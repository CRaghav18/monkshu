
let getBooks = function (db, res) {


    let query = "SELECT * FROM Books";

    db.all(query, function (err, data) {

        if (err) {
            console.log(err.message);
        } else {

            res.send(data)
        }


    })

}

export default getBooks