
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


let login = function (db, cred, res) {

    try {

        let Email = cred.mail
        let Password = cred.pass


        if (!Email || !Password) {
            return res.status(400).send({ err: "Incorrest Credentials" })

        }

        let user = []

        let selectQuery = "SELECT * FROM Users WHERE Email = ?";

        db.all(selectQuery, Email, function (err, rows) {
            if (err) {
                return res.status(500).json({ "error": err.message });
            }


            if (!rows || rows.length === 0) {
                return res.status(400).send({ err: "User not found" });
            }

            rows.forEach(function (row) {
                user.push(row)
            })


            let pass = bcrypt.hashSync(Password, user[0].Salt)

            if (pass === user[0].Password) {

                const token = jwt.sign({
                    user_id: user[0].Id,
                    username: user[0].Username,
                    Email
                },
                    `${process.env.TOKEN_KEY}`,
                    {
                        expiresIn: "2h"
                    })

                user[0].Token = token


            } else {
                console.log('no mtch');
                return res.status(400).send("No Match")
            }

            return res.status(200).send(user)

        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "error": "Internal server error" });
    }

}

export default login