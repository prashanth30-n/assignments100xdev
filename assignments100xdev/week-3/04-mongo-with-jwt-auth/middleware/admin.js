// Middleware for handling auth
const jwt=require("jsonwebtoken");
const {JWT_SECRET} = require("../config");      
function adminMiddleware(req, res, next) {
    const token=req.headers.authorization; // bearer token
    const words=token.split("");
    const jwtToken=words[1];
    try{
    const decodedvalue=jwt.verify(jwtToken,jwtSecret);
    if(decodedvalue.username){
        next()
    }
    else{
        res.status(403).json({
            msg:"you are not authenticated"
        })
    }
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}
catch(e){
    res.json({
        msg:"Incorrect inputs"
    })
}
}

module.exports = adminMiddleware;