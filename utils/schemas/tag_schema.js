const Joi = require('joi');

const TagSchema = {
    add: Joi.object({
        name: Joi.string().required().min(3).max(20).lowercase()
    }),
    patch: Joi.object({
        name: Joi.string().required().min(3).max(20).lowercase()
    }),
}


module.exports = {
    TagSchema
}