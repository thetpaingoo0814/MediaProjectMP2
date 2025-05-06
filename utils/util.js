const Redis = require('async-redis').createClient();
const bcrypt = require('bcryptjs');

const RDB = {
    set: async (key, val) => await Redis.set(key.toString(), JSON.stringify(val)),
    get: async (key) => JSON.parse(await Redis.get(key.toString())),
    del: async (key) => await Redis.del(key.toString()),
    keys: async (pattern) => await Redis.keys(pattern.toString())
};

const ENCODER = {
    encode : (password) => bcrypt.hashSync(password,10),
    compare : (plain,hash) => bcrypt.compareSync(plain,hash)
}

const Msg = (res, msg = "", result = {}) => {
    res.status(200).json({ con: true, msg, result });
};

const makeRandom = (min,max) => Math.floor((Math.random() * (max - min + 1))) + min;

module.exports = {
    RDB,
    ENCODER,
    Msg,
    makeRandom
}
