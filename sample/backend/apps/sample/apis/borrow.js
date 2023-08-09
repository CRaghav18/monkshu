const db = require("./db.js");
const API_CONSTANTS = require('./lib/constants.js');

exports.doService = async jsonReq => {

    try {
        const message = await borrow(jsonReq);
        console.log(message);
        if (message.err) return { result: false, err: message.err };
        return { result: true, message };

    } catch (error) {
        console.error('ERRRRR', error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
};

let borrow = async (req) => {

    try {

        const isbn = req.isbn;
        const bookName = req.bookName;
        const UserName = req.UserName


        let checkQuery = "SELECT Availability FROM Books WHERE ISBN = ?";
        const result = await db.getAllQuery(checkQuery, [isbn], API_CONSTANTS.APP_ROOT + '/db/library.db');

        console.log('_____---------________');
        console.log(JSON.stringify(result));



        if (!result || result.length === 0) {
            console.log('###############');

            return { err: 'Book not found' };

        } else if (result.rows[0].Availability === 0) {
            console.log('______________', result);

            return { err: 'Book is unavailable' };

        } else {

            console.log('***********');
            let query = "UPDATE Books SET Availability = 0, Next_Available = DATE('now', '+15 days') WHERE ISBN = ?";

            let query2 = "INSERT INTO Transactions (User_ID, Book_ID, Status, Borrow_Date) VALUES (?, ?, ?, ?)";

            // let query3 = "INSERT INTO myBooks (UserName, BookName, ISBN) VALUES (?, ?, ?)";

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

                const values2 = [userId, bookId, 'Borrowed', new Date().toISOString()];

                const result2 = await db.runQuery(query2, values2, API_CONSTANTS.APP_ROOT + '/db/library.db');

                if (!result2.err) {

                    console.log('BORROW LINE 71 WORKING');

                    // const values3 = [req.UserName, bookName, isbn];
                    // const result3 = await db.runQuery(query3, values3, API_CONSTANTS.APP_ROOT + '/db/library.db');

                    // if (!result3.err) {
                    //     console.log('QUERY 3 DONE');
                    //     return { data: resultUpdate.rows };
                    // } else {
                    //     console.log({ err: "Failed to insert into myBooks" });
                    //     return { err: "Failed to insert into myBooks" };
                    // }
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
