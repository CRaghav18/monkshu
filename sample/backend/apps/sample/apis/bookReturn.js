const db = require("./db.js");
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {
    try {
        const message = await bookReturn(jsonReq);
        console.log(message);
        if (message.err) return { result: false, err: message.err };
        return { result: true, message };
    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
};

const bookReturn = async req => {
    console.log('1ST CONSOLE WORKING');
    try {
        let isbn = req.isbn;
        let Title = req.bookName;
        const UserName = req.UserName


        console.log('2ND CONSOLE WORKING');

        let checkQuery = "SELECT Availability FROM Books WHERE ISBN = ?";

        const result = await db.getAllQuery(checkQuery, [isbn], API_CONSTANTS.APP_ROOT + '/db/library.db');

        console.log(JSON.stringify(result));

        if (!result || result.length === 0) {
            console.log('3RD CONSOLE WORKING');
            return { err: 'Book not found' };
        } else {
            console.log('5TH CONSOLE WORKING');

            let query = `UPDATE Books SET Availability = Availability + 1, Next_Available = DATE('now') WHERE ISBN = ? AND Availability < 10`

            let query2 = "INSERT INTO Transactions (User_ID, Book_ID, Status, Borrow_Date) VALUES (?, ?, ?, ?)";

            const resultUpdate = await db.runQuery(query, [isbn], API_CONSTANTS.APP_ROOT + '/db/library.db');

            if (!resultUpdate.err) {

                const userIDquery = 'SELECT ID FROM Users WHERE UserName = ?'
                const userResult = await db.getAllQuery(userIDquery, [UserName], API_CONSTANTS.APP_ROOT + '/db/library.db');

                if (!userResult || userResult.length === 0) {
                    return { err: 'User not found' };
                }

                const userId = userResult.rows[0].ID


                const bookIDquery = "SELECT ID FROM Books WHERE ISBN = ?"
                const bookResult = await db.getAllQuery(bookIDquery, [isbn], API_CONSTANTS.APP_ROOT + '/db/library.db')

                if (!bookResult || bookResult.length === 0) {
                    return { err: 'Book not found' };
                }


                bookId = bookResult.rows[0].ID

                const values2 = [userId, bookId, 'Returned', new Date().toISOString()];

                const result2 = await db.runQuery(query2, values2, API_CONSTANTS.APP_ROOT + '/db/library.db');

                if (!result2.err) {

                    return { data: "Book returned successfully" }


                } else {
                    console.log({ err: "Failed to insert into Transactions" });
                    return { err: "Failed to insert into Transactions" };
                }
            } else {
                console.log({ err: "Failed to update Availability" });
                return { err: "Failed to update Availability" };
            }
        }
    } catch (e) {
        console.log(e);
        return { err: e };
    }
};

