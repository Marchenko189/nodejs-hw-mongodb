import Joi from 'joi';

export const registerUserSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().min(3).max(50).required().pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    password: Joi.string().min(8).max(20).required(),
});

// export const registerSessionSchema = Joi.object({
//     userId: Joi.string().required(),
//     accessToken: Joi.string().required(),
//     refreshToken: Joi.string().required(),
//     accessTokenValidUntil: Joi.date().required(),
//     refreshTokenValidUntil: Joi.date().required(),
// });

export const loginUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});


