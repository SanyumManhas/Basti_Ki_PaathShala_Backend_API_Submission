const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{
    const token = req.headers.authorization;
    
    if(!token)return res.status(401).send({msg: "No Token Provided, Please Login to Get token"});

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.ut = decoded.ut;
        next();
    }
    catch(e)
    {
        res.status(403).send({msg: "Invalid or Expired Token"})
    }
}

module.exports = authMiddleware;
