
let myBooks = function (db, req, res) {

    let UserName = req.body.UserName;

    let query = "SELECT * FROM myBooks WHERE UserName = ?";

    db.all(query, [UserName], function (err, data) {

        if (err) {
            console.log(err.message);
        } else {

            res.send(data)
        }


    })

}

export default myBooks