const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    try {
        const message = await addBook(jsonReq);
        console.log(message);
        if (message.err) return { result: false, err: message.err }
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

let addBook = async (req) => {

    try {
        const validate = validateData(req)

        if (!validate.err) {

            let query = `INSERT INTO Books (Title, ISBN, Access_No, Price, Shelf_No, Row_No, Availability) VALUES('${req.title}', ${req.ISBN}, ${req.access}, ${req.price}, ${req.shelf}, ${req.row}, ${true});`

            let query2 = `INSERT INTO Authors (Name) VALUES('${req.author}')`

            result = await db.runQuery(query, [], API_CONSTANTS.APP_ROOT + '/db/library.db');

            console.log('query1 executed');

            if (result) {

                console.log(result);

                result2 = await db.runQuery(query2, [], API_CONSTANTS.APP_ROOT + '/db/library.db');

                console.log('query2 executed');

                if (result2) {

                    return { data: result.rows }

                } else {
                    console.log({ err: err.message });
                    return { err: err.message };
                }


            } else {
                console.log('def');
                console.log({ err: err.message });
                return { err: err.message };

            }
        } else {
            console.log('validation error');
            console.log(JSON.stringify(validate.err));
            return validate.err;
        }
    } catch (e) {
        console.log(e);
        return { err: e };
    }
}

const validateData = (req) => {

    const result = {}

    const title = req.title
    const author = req.author
    const ISBN = req.ISBN
    const access = req.access
    const price = req.price
    const shelf = req.shelf
    const row = req.row

    if (!title) {
        result.err = { err: "Blank Name!" }
        return result
    }

    if (!author) {
        result.err = { err: "Blank author!" }
        return result
    }

    if (!ISBN || ISBN.length < 10 || ISBN.length > 14) {
        console.log(ISBN.length);
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
