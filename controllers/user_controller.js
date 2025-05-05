const {Msg} = require('../utils/facade');
const register = (req,res,next) => {
    Msg(res,"Register Success",{});
}

module.exports = {
    register
}