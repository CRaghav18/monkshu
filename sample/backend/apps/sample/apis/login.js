// import jwt from 'jsonwebtoken'
// const bcrypt = require('bcryptjs')
const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');
// const getAllQuery = require('./db.js')

// console.log("ALL QUERY DRIVE", getAllQuery);


exports.doService = async jsonReq => {
    console.log(API_CONSTANTS.APP_ROOT);

    // Validate API request and check mandatory payload required
    //if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    try {
        const message = await login(jsonReq);
        console.log(message);
        if (message.err) return API_CONSTANTS.API_RESPONSE_FALSE;
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

const login = async (jsonReq) => {

    let cred = jsonReq;
    try {

        let Email = cred.mail;
        let Pass = cred.pass
        // let Password = cred.pass

        let selectQuery = `SELECT * FROM Users WHERE Email = ?`;

        const result = await db.getAllQuery(selectQuery, Email, API_CONSTANTS.APP_ROOT + '/db/library.db')

        console.log("---------------");
        console.log(JSON.stringify(result.rows));

        if (!result.rows || result.rows.length === 0) {
            return { err: "User not found" };
        }

        //let pass = bcrypt.hashSync(Password, user[0].Salt)

        if (Pass === result.rows[0].Password) {

            return { user: result.rows[0] };

        } else return { err: "Password did not match" }

    } catch (err) {
        console.log(err);
        return { err: "Internal server error" };
    }
}        /*


let pass = bcrypt.hashSync(Password, user[0].Salt)

if (pass === user[0].Password) {

//     const token = jwt.sign({
//         user_id: user[0].Id,
//         username: user[0].Username,
//         Email,
//         userType: user[0].Type
//     },
//         `${process.env.TOKEN_KEY}`,
//         {
//             expiresIn: "2h"
//         })

//     user[0].Token = token


// } else {
//     console.log('no mtch');
//     return { err: "No Match" };
// }

return { user: user }
} else return { err: "Password did not match" }

});
} catch (err) {
console.log(err);
return { err: "Internal server error" };
}
*/



//const validateRequest = jsonReq => (jsonReq);
