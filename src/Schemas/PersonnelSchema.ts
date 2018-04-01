const Schema = {
  type: 'object',
  title: 'Personnel',
  required: ['firstName'],
  properties: {
    firstName: {
      title: 'First name',
      type: 'string',
      minLength: 4
    },
    lastName: {
      title: 'Last name',
      type: 'string'
    },
    bio: {
      title: 'Bio',
      type: 'string'
    }
  }
};

const UISchema = {
  bio: {
    'ui:widget': 'textarea'
  }
};

const validation = (formData: any, errors: any) => {
  // if (formData.personnel.password !== formData.personnel.password_repeat) {
  //   errors.personnel.password_repeat.addError('Passwords don\'t match');
  // }
  return errors;
};

export default {
  Schema,
  UISchema
};
