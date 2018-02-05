export const Schema: any = {
  title: 'A simple form',
  className: 'ui container',
  description: 'A sweet form description',
  type: 'object',
  required: [],
  dependencies: {
    city: [
      'age'
    ]
  },
  properties: {
    fullName: {
      title: 'Full Name',
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          title: 'First Name'
        },
        lastName: {
          type: 'string',
          title: 'Last name'
        }
      }
    },
    city: {
      type: 'string',
      title: 'City'
    },
    age: {
      type: 'number',
      title: 'Age'
    },
    passwordOne: {
      title: 'Password',
      type: 'string',
      minLength: 3
    },
    passwordTwo: {
      title: 'Repeat password',
      type: 'string',
      minLength: 3
    }
  }
};
