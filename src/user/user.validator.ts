import * as yup from 'yup';

class UserValidator{
  create(user, res){
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
      throw 'Usuário inválido'
    }  
  }
}

export default new UserValidator();