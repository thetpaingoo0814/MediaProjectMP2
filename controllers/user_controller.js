const { TokenExpiredError } = require('jsonwebtoken');
const {Msg, UserService, ENCODER,TOKEN} = require('../utils/facade');

const register = async (req,res,next) => {
        let name = req.body.name.toLowerCase();
        let phone = req.body.phone;
        let password = req.body.password;
        let displayName = req.body.displayName;
        const namedUser = await UserService.getByName(name);

        if(namedUser) {
            next(new Error("Username is already in use!"));
            return;
        }

        let phoneUser = await UserService.getByPhone(phone);

        if(phoneUser){
            next(new Error("Phone number is already in use!"));
            return;
        }

        password = ENCODER.encode(password);

        let result = await UserService.add(name,displayName,phone,password);

        Msg(res,"Register Success",result);
}

const login = async(req, res, next) => {
    let name = req.body.name.toLowerCase();
    let password = req.body.password;

    let namedUser = await UserService.getByName(name);

    if(!namedUser) {
        next(new Error("Creditial Error!"));
        return;
    }
    if(!ENCODER.compare(password,namedUser.password)) {
        next(new Error("Creditial Error!"));
        return;
    }

    await UserService.setCacheUser(namedUser._id.toString());

    let token = TOKEN.makeToken(namedUser._id.toString());
    
    Msg(res,"Login Success",token);
}

const getMe = async(req, res, next) => {
    let userId = req.userId;
    let user = req.user;
    Msg(res, "User Detail", user);
}

const getUsers = async(req,res,next) => {
    let pageIndex = req.params.index;
    let users = await UserService.getUsers(pageIndex);
    Msg(res,`Page Index ${pageIndex}'s Users`,{});
}

const getSingleUser = async(req,res,next) => {
    let userId = req.params.id;
    let user = await UserService.getById(userId);
    Msg(res,"Single User",user);
}

const changeRole = async(req,res,next) => {
    let userId = req.body.userId;
    let role = req.body.role;
}

module.exports = {
    register,
    login,
    getMe,
    getUsers,
    getSingleUser
}