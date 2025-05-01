const JWT = require('jsonwebtoken');
//const UserService = require('../services/user_service');
module.exports = {
    validateToken:(req,res,next) => {
        if(!req.headers.authorization){
            next("Authorization Error");
        }else{
            let token = req.headers.authorization.split(" ")[1];
            JWT.verify(token,process.env.SECRET_KEY,async(err,decoded)=>{
                if(err){
                    if(err.message === "jwt expired"){
                        next(new Error("Session pyat twar lox login again!"));
                    }else{
                        next(new Error("Authorization Error"));
                    }
                }else {
                    console.log("Code To Implement when user service is ready!")
                    // let userId = decoded.indexOf;
                    // let user = await UserService.getCacheUser(userId);
                    // if(!user) {
                    //     next(new Error("Authorizaton Error"));
                    //     return;
                    // }
                    // req.userId = userId;
                    // req.user  = user;
                    // next();
                }
            })
        }
    },
    validateRole:(Role)=> {
        return async(req,res,next) => {
            if(req.user.role === Role) {
                next ();
            }else {
                next (new Error("You are not permitted to use this route!"))
            }
        }
    },

    validateStaff:(req,res,next) => {
        if(req.user.role <= 1){
            next();
        }else {
            next(new Error("You are not permitted to use this route!"))
        }
    },
    validateBody:(scheme) => {
        return (req,res,next) => {
            const result = scheme.validate(req.body);
            if(result.error){
                next(new Error(result.error.details[0].message));
            }
        }
    }

}