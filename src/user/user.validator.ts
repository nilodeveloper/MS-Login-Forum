import * as yup from 'yup';

class UserValidator{
  check(user):Promise<boolean>{
    let schema = yup.object().shape({
      username: yup.string().required(),
      email: yup.string().required(),
      type: yup.number().required()
    });

    return schema.isValid({
        username: user.username,
        email: user.email,
        type: user.type
      })
      .then(function (valid) {
        return valid
      });
    }
}

export default new UserValidator();