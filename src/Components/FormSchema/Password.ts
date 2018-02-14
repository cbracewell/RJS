const Schema = {
  type: 'object',
  required: ['password', 'password_repeat'],
  properties: {
    password: {
      title: 'Password',
      type: 'string',
      minLength: 6
    },
    password_repeat: {
      title: 'Repeat password',
      type: 'string'
    }
  }
};

const UISchema = {
  password: {
    'ui:widget': 'Input'
  },
  password_repeat: {
    'ui:widget': 'Input'
  }
};

const validation = (formData: any, errors: any) => {
  console.log(formData);
  if (formData.security.password !== formData.security.password_repeat) {
    errors.security.password_repeat.addError('Passwords don\'t match');
  }
  return errors;
};

export default {
  Schema,
  UISchema,
  validation
};
