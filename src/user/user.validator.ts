import * as yup from 'yup';
import message from './user.constants.json';
class UserValidator{
  create(user){
    let schema = yup.object().shape({
      username: yup.string().required(),
      email: yup.string().required(),
      type: yup.number().required()
    });

    const isValid = schema.isValid({
        username: user.username,
        email: user.email,
        type: user.type
      })
      .then(function (valid) {
        return valid
      });

    if(!isValid){
      throw message["user.invalidUser"]
    }  
  }

  login(user){
    let schema = yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required()
    });

    const isValid = schema.isValid({
        username: user.username,
        password: user.password
      })
      .then(function (valid) {
        return valid
      });

    if(!isValid){
      throw message["user.invalidUser"]
    }  
  }
}

export default new UserValidator();