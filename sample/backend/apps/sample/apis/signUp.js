let testing = function(db,data){

// console.log(data);

let Dname = data.userName
let Dgmail = data.gmail
let Dpass = data.pass



 let insertQuery = `INSERT INTO login (UserName, Gmail , pass) VALUES ("${Dname}", "${Dgmail}","${Dpass}");`;
 db.run(insertQuery);
 //apply try catch here


  }


export default testing