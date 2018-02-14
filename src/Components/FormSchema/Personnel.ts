const Schema = {
  type: 'object',
  required: ['firstName', 'lastName'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First Name',
      minLength: 2
    },
    lastName: {
      type: 'string',
      title: 'Last name',
      minLength: 2
    },
  }
};

const UISchema = {
  firstName: {
    'ui:widget': 'Input'
  },
  lastName: {
    'ui:widget': 'Input'
  },
};

export default {
  Schema,
  UISchema
};
