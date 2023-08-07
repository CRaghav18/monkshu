const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    try {
        const message = await removeUser(jsonReq);
        console.log(message);
        if (message.err) return { result: false, err: message.err }
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

let removeUser = async (req) => {

    delete req.token

    let userName = req.userName

    let query = "DELETE FROM Users WHERE Username = ?";

    result = await db.runQuery(query, [userName], API_CONSTANTS.APP_ROOT + '/db/library.db');

    console.log(result);

    if (result) {

        return { data: result }

    } else {
        console.log({ err: err.message });
        return { err: err.message };
    }
}