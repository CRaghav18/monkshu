const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    //    console.log(jsonReq.header);
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

            console.log('---------------------------');
            console.log(JSON.stringify(result));

            if (!result.err && !result.error) {

                return { data: result }

            } else {
                let err;
                if (result.error)
                    err = result.error.code
                else
                    err = result.err.message;

                if (err == "SQLITE_CONSTRAINT")
                    err = "Username and Email must be unique";

                console.log('-======----=========----');
                console.log({ err: err });
                return { err: err };
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
    const type = req.type;
    const userType = req.UserType;

    if (userType == type) {
        result.err = { err: "You can't add user on same level" }
        return result;
    }

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

