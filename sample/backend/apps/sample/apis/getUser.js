
const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    try {
        const message = await getUser(jsonReq);
        console.log(message);
        if (message.err) return API_CONSTANTS.API_RESPONSE_FALSE;
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

let getUser = async (jsonReq) => {

    console.log(jsonReq);

    let query1 = "SELECT * FROM Users";
    let query2 = `SELECT * FROM Users WHERE Role = "Member" `

    try {
        let result;

        if (jsonReq.type === 'Librarian') {

            result = await db.getAllQuery(query2, [], API_CONSTANTS.APP_ROOT + '/db/library.db');
        } else {

            result = await db.getAllQuery(query1, [], API_CONSTANTS.APP_ROOT + '/db/library.db');
        }

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
}