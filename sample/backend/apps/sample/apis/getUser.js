
let getUser = function (db, req, res) {


    let query1 = "SELECT * FROM Users";
    let query2 = `SELECT * FROM Users WHERE TYPE = "Member" `


    if (req.body.type === 'Librarian') {
        db.all(query2, function (err, data) {

            if (err) {
                console.log(err.message);
            } else {

                res.send(data)
            }


        })
    } else {
        db.all(query1, function (err, data) {

            if (err) {
                console.log(err.message);
            } else {

                res.send(data)
            }


        })
    }

}

export default getUser