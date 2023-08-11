const db = require("./db.js")
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    try {
        const message = await myBooks(jsonReq);
        console.log(message);
        if (message.err) return { result: false, err: message.err }
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }

}

let myBooks = async (req) => {

    let UserName = req.UserName

    try {

        let query = "SELECT Transactions.*, Users.ID, Books.*, Authors.* FROM Transactions INNER JOIN Users ON Users.ID = Transactions.User_ID INNER JOIN Books ON Books.ID = Transactions.Book_ID INNER JOIN Authors ON Authors.ID = Books.ID WHERE UserName = ? AND Status = 'Borrowed' AND NOT EXISTS (SELECT 1 FROM Transactions AS T2 WHERE T2.User_ID = Transactions.User_ID AND T2.Book_ID = Transactions.Book_ID AND T2.Status = 'Returned' AND T2.Borrow_Date > Transactions.Borrow_Date)"

        const result = await db.getAllQuery(query, [UserName], API_CONSTANTS.APP_ROOT + '/db/library.db');

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
