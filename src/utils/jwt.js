import jwt from 'jsonwebtoken'

export const generateToken = (user) =>{
    const token = jwt.sign({ user }, "coder", {expiresIn: '12h'})
    return token
}

console.log(generateToken({
    "_id":"660d6a85e5595054d419b508",
    "first_name":"Noberto Agustin Bertoli ",
    "last_name":"bertoli ",
    "password":"$2b$12$xI.eoVUdfT08lU9MDDKwuu6llGICoUj62dB/JAECV2Exz2tkOLVm2",
    "age":18,
    "email":"agusbertoi@gmail.com",
    "rol":"User",
}))