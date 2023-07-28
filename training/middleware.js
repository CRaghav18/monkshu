import jwt from 'jsonwebtoken'

const jwtAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;


  if (!authHeader) {
    return res.status(401).json({ error: 'No Token Provided' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token part after 'Bearer'


  if (token == null) return res.sendStatus(401).json({ err: 'No Token Provided' })

  jwt.verify(token, `${process.env.TOKEN_KEY}`, (err, user) => {
    if (err) return res.sendStatus(403).json({ err: 'Invalid Token' })
    req.user = user


    let type = user.userType

    let route = req.url

    if (type == "Admin" && route == '/addBook') {

      return res.status(400).json({ error: 'THATS NOT YOUR WORK' });
    }

    if (type == "Librarian" && route == '/addUser' && req.body.type == 'Librarian') {

      return res.status(400).json({ error: "YOU CAN'T ADD A LIBRARIAN" });
    }

    if (type == 'Member' && route !== '/getBooks') {

      return res.status(400).json({ error: "YOU ARE NOT AUTHORIZED FOR THAT" })

    }


    next()
  });
};

export default jwtAuth;





