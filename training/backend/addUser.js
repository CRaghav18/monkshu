'use strict'

let addUser = function (db, req, res) {



    const result = validateUser(req);

    if (!result.err) {
        let query = `INSERT INTO Users (Type, Username, Email, password) VALUES ('${req.body.type}', '${req.body.userName}', '${req.body.email}', '${req.body.pass}');`

        db.all(query, function (err, data) {
            if (err) {
                res.send({ err: "Email Exists" });
            } else {
                res.send(data)
            }
        })
    } else {

        res.send(result.err)
    }
}

const validateUser = (req) => {
    const result = {}
    const email = req.body.email
    const pass = req.body.pass
    const username = req.body.userName


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

export default addUser