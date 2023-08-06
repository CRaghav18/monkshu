let removeBook = function (db, req, res) {

    delete req.body.token
    let isbn = req.body.isbn

    let query = "DELETE FROM Books WHERE ISBN = ?";

    db.run(query, [isbn], function (err, data) {

        if (err) {
            console.log(err.message);
        } else {

            res.send(data)
        }


    })

}

export default removeBook