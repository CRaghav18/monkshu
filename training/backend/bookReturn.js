let bookReturn = function (db, req, res) {
    delete req.body.token;
    let isbn = req.body.isbn;
    let bookName = req.body.bookName

    let checkquery = "SELECT Availability FROM Books WHERE ISBN = ?";

    db.get(checkquery, [isbn], function (err, result) {
        if (err) {

            console.log(err.message);
            res.status(500).send("Internal Server Error");

        } else {

            if (!result) {
                res.status(404).send({ err: err.message });


            } else if (result.Availability === 1) {

                res.send({ err: "Book is unavailable" });

            } else {

                let query = "UPDATE Books SET Availability = 1, Date = Date('now') WHERE ISBN = ?";

                let query2 = "INSERT INTO Transactions (UserName, BookName, ISBN) VALUES (?, ?, ?)";
                let values2 = [req.body.UserName, bookName, isbn];

                let query3 = "DELETE FROM myBooks WHERE UserName = ?";
                let values3 = [req.body.UserName];

                db.run(query, [isbn], function (err, data) {


                    if (err) {

                        res.status(400).send({ err: err.message })

                    } else {

                        db.run(query2, values2, function (err) {
                            if (err) {
                                res.status(400).send({ err: err.message });
                            } else {

                                db.run(query3, values3, function (err) {
                                    if (err) {
                                        res.status(400).send({ err: err.message });
                                    } else {

                                        res.send({ message: "Book returned successfully." });
                                    }
                                });

                            }
                        });
                    }
                });
            }
        }
    });
};


export default bookReturn;
