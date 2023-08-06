
const sqlite3 = require('sqlite3')
const dbPath = '/Users/raghav/Documents/DLT/monkshu/backend/apps/Library/db/library.db'

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        return console.error(err.message)
    }
    else {
        console.log('Database working');
    }

})

// const query = `CREATE TABLE Books (

// ID INTEGER PRIMARY KEY UNIQUE,
// Title TEXT ,
// ISBN NUMBER VARCHAR(13),
// Access_No NUMBER,
// Price NUMBER,
// Shelf_No NUMBER,
// Row_No NUMBER,
// Availability NUMBER,
// Next_Available DATE

// )`

// const query = `CREATE TABLE Transactions (

// ID INTEGER PRIMARY KEY UNIQUE,
// User_ID INTEGER,
// Book_ID INTEGER,
// Status BOOLEAN,
// Borrow_Date, DATE,


// FOREIGN KEY (User_ID) REFERENCES Users(ID),
// FOREIGN KEY (Book_ID) REFERENCES Books(ID)

// )`


// const query = `SELECT Users.UserName, Transactions.Borrow_Date FROM Users INNER JOIN Transactions ON Users.ID = Transactions.User_ID WHERE Transactions.Book_ID = 1`

let query = "SELECT * FROM Users WHERE Email = 'admin@gmail.com'";

let Email = "admin@gmail.com"

db.all(query, (err, row) => {

    if (err) {
        return console.error(err.message)
    } else {
        console.log('Query Run Successfully', row);
    }
})

db.close((err) => {

    if (err) {
        return console.err(err.message)
    } else {
        console.log('DataBase Connection Closed');
    }


})
