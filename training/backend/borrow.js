let borrow = function (db, req, res) {
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
                res.status(404).send({ err: "Book not found" });

            } else if (result.Availability === 0) {

                res.send({ err: "Book is unavailable" });

            } else {

                let query = "UPDATE Books SET Availability = 0, Date = Date('now', '+15 days') WHERE ISBN = ?";

                let query2 = "INSERT INTO Transactions (UserName, BookName, ISBN) VALUES (?, ?, ?)";
                let values2 = [req.body.UserName, bookName, isbn];


                db.run(query, [isbn], function (err, data) {


                    if (err) {

                        res.status(400).send({ err: err.message })

                    } else {

                        db.run(query2, values2, function (err) {
                            if (err) {
                                res.status(400).send({ err: err.message });
                            } else {
                                res.send({ message: "Book borrowed successfully." });
                            }
                        });
                    }
                });
            }
        }
    });
};


export default borrow;
