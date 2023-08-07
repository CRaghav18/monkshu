const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    try {
        const message = await bookReturn(jsonReq);
        console.log(message);
        if (message.err) return API_CONSTANTS.API_RESPONSE_FALSE;
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

let bookReturn = (req) => {

    delete req.token;
    let isbn = req.isbn;
    let bookName = req.bookName

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
                let values2 = [req.UserName, bookName, isbn];

                let query3 = "DELETE FROM myBooks WHERE UserName = ?";
                let values3 = [req.UserName];

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
}
