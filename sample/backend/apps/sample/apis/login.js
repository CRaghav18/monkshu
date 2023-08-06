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
        return { result: true, results: { message } };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}


const login = async (jsonReq) => {

    let cred = jsonReq;
    try {

        let Email = cred.mail

        //        let Password = cred.pass

        let selectQuery = `SELECT * FROM Users WHERE Email = ?`;

        const result = await db.getAllQuery(selectQuery, Email, API_CONSTANTS.APP_ROOT + '/db/library.db')

        console.log(result.rows);
        console.log(JSON.stringify(result.rows));

        /*const rows =  new Promise(async resolve => {
            db.run(selectQuery, Email, async function (error) {
                if (error) {
                    console.log(`Error in dbInstance.run: ${error.message}`);
                    resolve({ result: false, error });
                } else {
                    resolve({ result: true, lastID: this.lastID });
                }
            });
        });
        */

        /*const rows = new Promise((resolve, reject) => {

            // console.log('LINE 38 WORKING');
            // console.log(JSON.stringify(db));
            // console.log('working');
            db.all(selectQuery, [Email], function (err, rows) {
                if (err) {
                    console.log('ERRRRR');
                    reject(err)
                } else {
                    console.log('SUCESSSS');
                    resolve(rows)
                }
            });
        });*/

        //console.log(rows);

        if (!result.rows || result.rows.length === 0) {
            return { err: "User not found" };
        }

        // Other processing logic...
        return { user: result.rows };

    } catch (err) {
        console.log(err);
        return { err: "Internal server error" };
    }
}        /*

rows.forEach(function (row) {
user.push(row)
})


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
