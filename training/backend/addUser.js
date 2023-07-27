'use strict'

let addUser = function (db, req, res) {


    let query = `INSERT INTO Users (Type, Username, Email, password) VALUES ('${req.body.type}', '${req.body.userName}', '${req.body.email}', '${req.body.pass}');`


    db.all(query, function (err, data) {

        if (err) {
            console.log(err.message);
        } else {

            res.send(data)
        }


    })

}

export default addUser