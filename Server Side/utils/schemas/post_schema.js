const Joi = require('joi');

const postSchema = {
    add: Joi.object({
        title: Joi.string().required().min(3).max(100),
        content: Joi.string().required().min(3).max(1000),
        category: Joi.string().required(),
        tags: Joi.string().required(),
    }),
}


module.exports = { 
    postSchema
}