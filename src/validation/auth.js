import Joi  from 'joi';
export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(10).required().messages({
    'string.min': 'yo yo name must be at least 3 characters',
  }),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(15).required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
