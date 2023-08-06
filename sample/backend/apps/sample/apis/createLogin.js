
import sqlite3 from 'sqlite3'


const db = new sqlite3.Database('backend/apps/sample/db/library.db', (err) => {
    if (err) {
        return console.error(err.message)
    }
    else {
        console.log('Database working');
    }

})

db.run("DROP TABLE books")

// db.run(`ALTER TABLE Books ADD COLUMN AddedDate DATE`, [], (err) => {
//     if (err) {
//         console.error('Error adding the AddedDate column:', err.message);
//     } else {
//         console.log('AddedDate column added successfully.');
//     }
// });



// db.run(`CREATE TABLE Books (
//     Name Text UNIQUE,
//     Author text, 
//     ISBN Numeric UNIQUE, 
//     AccessNo Numeric,             
//     Price Numeric,    
//     ShelfNo Numeric,
//     RowNo Numeric,
//     Availability Boolean
//     )`,
// (err) => {
//     if (err) {
//         console.log(err.message);
//     } else{
//         // Table just created, creating some rows
//         var insert = 'INSERT INTO Books (Name, Author, ISBN, AccessNo, Price, ShelfNo, RowNo, Availability) VALUES (?,?,?,?,?,?,?,?)'
//         db.run(insert, ["One Of The Legendaries", "Raghav Chaturvedi", 978-8194882824, 1305, 150, 2, 5,true]),
//         db.run(insert, ["When The Night Falls","Raghav Chaturvedi",978-9356110427, 1311, 209,1,5,true])
//     }
// });  

// var insert = 'INSERT INTO Books (Name, Author, ISBN, AccessNo, Price, ShelfNo, RowNo, Availability) VALUES (?,?,?,?,?,?,?,?)'
// db.run(insert, ["Test1", "John Doe", 101-10001001, 801, 100 , 1, 1,true]),
// db.run(insert, ["Test2", "John Doe", 102-10002002, 781, 200 , 2, 12,true]),
// db.run(insert, ["Test3", "Jane Doe", 103-10003003, 510, 300 , 3, 5,false]),
// db.run(insert, ["Test4", "Jane Doe", 104-10004004, 150, 400 , 4, 2,true]),
// db.run(insert, ["Test5", "Anonymous", 105-10005005, 294, 500 , 5, 8,true]),
// db.run(insert, ["Test6", "Anonymous", 106-10006006, 619, 600 , 6, 11,false]),
// db.run(insert, ["Test7", "Anonymous", 107-70007007, 116, 700 , 7, 6,true]),
// db.run(insert, ["Test8", "Nameless", 108-80008008, 526, 800 , 8, 10,true]),
// db.run(insert, ["Test9", "Nameless", 109-90009009, 621, 900 , 9, 1,true]),
// db.run(insert, ["Test10", "NoOne", 110-10010010, 192, 1000 , 8 , 5,true]),
// db.run(insert, ["Test11", "NoOne", 111-10011011, 712, 1100 , 7 , 7,false])


