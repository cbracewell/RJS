export const Schema: any = {
  title: 'A simple form',
  className: 'ui container',
  description: 'A sweet form description',
  type: 'object',
  required: ['firstName', 'lastName', 'password'],
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
      title: 'City',
      type: 'string'
    },
    password: {
      title: 'Password',
      type: 'string',
      minLength: 6
    },
    password_repeat: {
      title: 'Repeat password',
      type: 'string',
      minLength: 6
    }
  }
};
