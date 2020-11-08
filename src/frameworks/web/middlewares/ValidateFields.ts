import validator, { Joi } from 'koa-context-validator';

export default validator({
    body: Joi.object().keys({
        parameters: Joi.string().required(),
        shoping_centers: Joi.string().required(),
        roads: Joi.string().required()
    }),
});