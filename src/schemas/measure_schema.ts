import Joi from "joi";

const measureTypeEnum = ['WATER', 'GAS'];

export const measureSchema = Joi.object({
    image: Joi.string().base64().required(),
    customer_code: Joi.string().required(),
    measure_datetime: Joi.date().iso().required(),
    measure_type: Joi.string().valid(...measureTypeEnum).required(),
});