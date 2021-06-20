import * as yup from 'yup';

class UserValidator{
  check(user){
    let schema = yup.object().shape({
      username: yup.string().required(),
      email: yup.string().required(),
      type: yup.number().required()
    });

    schema
      .isValid({
        username: user.username,
        email: user.email,
        type: user.type
      })
      .then(function (valid) {
        return true
      });
    }
}

export default new UserValidator();