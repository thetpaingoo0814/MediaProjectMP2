const {Msg, UserService, ENCODER} = require('../utils/facade');

const register = async (req,res,next) => {
        let name = req.body.name;
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

module.exports = {
    register
}