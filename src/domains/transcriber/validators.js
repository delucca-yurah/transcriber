import Joi from 'joi';

const transcribe = Joi.object().keys({
  content: Joi.string().required(),
  language: Joi.string().required()
}).required()

export default {
  transcribe
}
