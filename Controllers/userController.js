const userModel = require('../Models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

//register user
exports.registerUser = async(req,res)=>{
    try{
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        const newuser = new userModel({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            userType:req.body.ut
        });

        const result = await newuser.save();
        
        if(result)
        {
            res.send("user registered successfully!");
        }
        else
        {
            res.send("Couldnt register user, Please Try Again!");
        }
    }
    catch(e)
    {
        res.status(500).send("Exception occured " + e.message);
    }
}

exports.loginUser = async(req,res)=>{
    try{
        const user =await userModel.findOne({username:req.body.username});
        if(user)
        {
            if(bcrypt.compareSync(req.body.password, user.password))
            {
                const token = jwt.sign({ut: user.userType},process.env.SECRET_KEY);
                res.json({msg:'use this token while calling users list api', token});
            }
            else
            {
                res.send("Incorrect Password!");
            }
        }
        else
        {
            res.send("Incorrect Username!");
        }
    }
    catch(e)
    {
        res.status(500).send("Exception occured " + e.message);
    }
}

//list of users, by admin only
exports.listUsers = async(req,res)=>{
    if(req.ut === 'admin')
    {
        const users = await userModel.find().select("-password");
        console.log(users);
        if(users.length > 0)
        {
            res.status(200).json({
                users
            });
        }
        else
        {
            res.status(404).json({msg: "No User Found!"});
        }
    }
    else
    {
        res.status(401).json({msg: "Incorrect User Type!, Access Denied"});
    }
}
