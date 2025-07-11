const jwt=require("jsonwebtoken");
const{jwtSecret}=require("../config");      

function userMiddleware(req, res, next) {
    const token=req.headers.authorization; // bearer token
    //bearer token is used to make user trustable bearer means user is trusted
    const words=token.split("");
    const jwtToken=words[1];
    try{
        const decodedvalue=jwt.verify(jwtToken,jwtSecret);
        if(decodedvalue.username){
            next();
        }
        else{
            res.status(403).json({
                msg:"you are not authenticated"
            })
        }
        
    }
    catch(e){
        res.json({
            msg:"Incorrect inputs"
        })
    }

    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;