import jwt from 'jsonwebtoken'


const jwtAuth = (req, res, next) => {
  let token = req.body.token;

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, `${process.env.TOKEN_KEY}`, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  });
}

export default jwtAuth;