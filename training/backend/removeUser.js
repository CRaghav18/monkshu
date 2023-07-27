let removeUser = function (db, req, res) {

    delete req.body.token
    let userName = req.body.userName

    console.log(userName);

    let query = "DELETE FROM Users WHERE Username = ?";

    db.run(query, [userName], function (err, data) {

        if (err) {
            console.log(err.message);
        } else {

            res.send(data)
        }


    })

}

export default removeUser