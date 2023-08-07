
const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    try {
        const message = await getBooks();
        console.log(message);
        if (message.err) return API_CONSTANTS.API_RESPONSE_FALSE;
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

let getBooks = async () => {

    try {

        let query = "SELECT * FROM Books";

        const result = await db.getAllQuery(query, [], API_CONSTANTS.APP_ROOT + '/db/library.db');

        console.log(JSON.stringify(result));

        if (result.rows || result.rows.length >= 0) {

            return { data: result.rows }

        } else {
            console.log({ err: err.message });
            return { err: err.message };

        }
    } catch (e) {
        console.log(e);
        return { err: e };

    }

};
