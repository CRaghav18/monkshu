let testing = function(db,data){

// console.log(data);

let Dgmail = data.gmail
let Dpass = data.pass


 let insertQuery = `INSERT INTO login (Gmail , pass) VALUES ("${Dgmail}","${Dpass}");`;
 db.run(insertQuery);


  }


export default testing