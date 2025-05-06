const redis = require('redis');
const Redis = redis.createClient(); // Default client settings, adjust if needed

const bcrypt = require('bcryptjs');

const { compare, hash } = require('bcryptjs');

const RDB = {
    set: async (key, val) => {
        try {
            const safeVal = JSON.stringify(val);
            await Redis.set(key, safeVal);
        } catch (error) {
            console.error("Error stringifying value for Redis:", error);
            throw new Error("Invalid data format for Redis storage!");
        }
    },
    get: async (key) => {
        try {
            const value = await Redis.get(key.toString());
            return JSON.parse(value);
        } catch (error) {
            console.error("Error parsing JSON from Redis:", error);
            return null; // Return null to avoid stopping the application
        }
    },
    del: async (key) => await Redis.del(key.toString()),
    keys: async (pattern) => await Redis.keys(pattern.toString())
};

const ENCODER = {
    encode : (password) => bcrypt.hashSync(password,11),
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
