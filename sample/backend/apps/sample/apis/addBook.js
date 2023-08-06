'use strict'

let addBook = function (db, req, res) {

    const result = validateData(req)

    if (!result.err) {
        let query = `INSERT INTO Books (Name, Author, ISBN, AccessNo, Price, ShelfNo, RowNo, Availability) VALUES('${req.body.name}', '${req.body.author}', ${req.body.ISBN}, ${req.body.access}, ${req.body.price}, ${req.body.shelf}, ${req.body.row}, ${true});`


        db.all(query, function (err, data) {

            if (err) {
                console.log(err.message);
            } else {

                res.send(data)
            }


        })
    } else {
        res.send(result.err)
    }

}

const validateData = (req) => {

    const result = {}

    const name = req.body.name
    const author = req.body.author
    const ISBN = req.body.ISBN
    const access = req.body.access
    const price = req.body.price
    const shelf = req.body.shelf
    const row = req.body.row

    if (!name) {
        result.err = { err: "Blank Name!" }
        return result
    }

    if (!author) {
        result.err = { err: "Blank author!" }
        return result
    }

    if (!ISBN || ISBN.length < 10 || ISBN.length >= 13) {
        result.err = { err: " Invalid ISBN!" }
        return result
    }

    if (!access || access.length >= 5) {
        result.err = { err: "Acesss should be lenght of 1-5" }
        return result
    }
    if (!price) {
        result.err = { err: "Blank Price" }
        return result
    }
    if (!shelf) {
        result.err = { err: "Blank Shelf!" }
        return result
    }
    if (!row) {
        result.err = { err: "Blank Row!" }
        return result
    }

    return result

}

export default addBook