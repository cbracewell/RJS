import Password from './PasswordSchema';

export const Schema: any = {
  title: 'Register',
  type: 'object',
  definitions: {
    password: Password.Schema,
  },
  properties: {
    username: {
      title: 'Username',
      type: 'string',
      minLength: 6
    },
    email: {
      title: 'Email',
      type: 'string',
      format: 'email',
      minLength: 6
    },
    password: { title: '', '$ref': '#/definitions/password' }
  }
};

export const UISchema: any = {
  username: { 'ui:placeholder': 'Randell' },
  email: { 'ui:placeholder': 'randell@gmail.com' },
  password: Password.UISchema
};

export const Validation = (formData: any, errors: any) => ({
  ...Password.validation(formData, errors)
});
