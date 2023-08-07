const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    try {
        const message = await removeBook(jsonReq);
        console.log(message);
        if (message.err) return { result: false, err: message.err }
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}


let removeBook = async (req) => {

    delete req.token
    let isbn = req.isbn

    let query = "DELETE FROM Books WHERE ISBN = ?";

    result = await db.runQuery(query, [isbn], API_CONSTANTS.APP_ROOT + '/db/library.db');

    console.log(result);

    if (result) {

        return { data: result }


    } else {
        console.log({ err: err.message });
        return { err: err.message };
    }
}