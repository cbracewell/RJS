const Schema = {
  type: 'object',
  title: 'Personnel',
  classNames: 'row',
  required: ['firstName'],
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      enum: ['Mr', 'Mrs', 'Ms', 'Miss']
    },
    firstName: { title: 'First name', type: 'string', minLength: 4 },
    lastName: { title: 'Last name', type: 'string' },
    dob: { title: 'Age', type: 'string' },
    bio: { title: 'Bio', type: 'string' }
  }
};

const UISchema = {
  title: {
    'ui:autofocus': true,
    'ui:widget': 'select'
  },
  firstName: {
    'ui:emptyValue': ''
  },
  dob: {
    'ui:widget': 'date',
    'ui:title': 'Date of birth'
  },
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
