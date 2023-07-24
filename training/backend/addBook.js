'use strict'

let addBook = function (db, req, res) {


    let query = `INSERT INTO Books (Name, Author, ISBN, AccessNo, Price, ShelfNo, RowNo) VALUES('${req.body.name}', '${req.body.author}', ${req.body.ISBN}, ${req.body.access}, ${req.body.price}, ${req.body.shelf}, ${req.body.row}, true);`


    db.all(query, function (err, data) {

        if (err) {
            console.log(err.message);
        } else {

            res.send(data)
        }


    })

}

export default addBook