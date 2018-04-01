const Schema = {
  type: 'object',
  required: ['password', 'password_repeat'],
  title: 'Security',
  properties: {
    password: { title: 'Password', type: 'string', minLength: 6 },
    password_repeat: { title: 'Repeat password', type: 'string' }
  }
};

const UISchema = {
  password: { 'ui:widget': 'password' },
  password_repeat: { 'ui:widget': 'password' }
};

const validation = (formData: any, errors: any) => {
  if (formData.password.password !== formData.password.password_repeat) {
    errors.password.password_repeat.addError('Passwords don\'t match');
  }
  return errors;
};

export default {
  Schema,
  UISchema,
  validation  
};
