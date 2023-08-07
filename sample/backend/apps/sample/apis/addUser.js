const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    try {
        const message = await addUser(jsonReq);
        console.log(message);
        if (message.err) return { result: false, err: message.err }
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

let addUser = async (req) => {

    try {

        const validate = validateUser(req);

        if (!validate.err) {
            let query = `INSERT INTO Users (Role, Username, Email, password, DateCreated) VALUES ('${req.type}', '${req.userName}', '${req.email}', '${req.pass}', '${Date('now')}');`

            result = await db.runQuery(query, [], API_CONSTANTS.APP_ROOT + '/db/library.db');

            console.log(result);

            if (result) {

                return { data: result }

            } else {
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

const validateUser = (req) => {
    const result = {}
    const email = req.email
    const pass = req.pass
    const username = req.userName


    if (!username || username.length < 4 || username.length > 10) {
        result.err = { err: "UserName must contain 4-10 Characters" };
        return result;
    }

    if (!email || !email.includes('@')) {
        result.err = { err: "In-Correct email Format" };
        return result;
    }

    if (!pass) {
        result.err = { err: "Password cannot be empty" };
        return result;
    }

    return result;
}

