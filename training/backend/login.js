
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


let login = function(db,cred,res){

try{

   let Email = cred.mail
   let Password = cred.pass


    if (!Email & !Password){
        
        // prompt('Please fill all inputs')
    }

    let user = []

    let selectQuery = "SELECT * FROM Users WHERE Email = ?";
   
    db.all(selectQuery, Email, function(err, rows) {
       
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }

       

rows.forEach (function(row) {
    user.push(row)

})


    let pass = bcrypt.hashSync(Password, user[0].Salt)

    if(pass === user[0].Password){

        const token = jwt.sign({
            user_id:user[0].Id, 
            username:user[0].Username,
            Email
        },
        `${process.env.TOKEN_KEY}`,
        {
            expiresIn: "2h"
        })

    user[0].Token = token


    }else {
        console.log('no mtch');
        return res.status(400).send("No Match")
    }

    return res.status(200).send(user)

    });
}catch(err){
    console.log(err);
}

}

export default login