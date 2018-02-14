const UISchema = {
  'ui:order': [
    'country',
    'city'
  ],
  country: {
    'ui:widget': 'Dropdown',
    'ui:options': {
      search: true,
      selection: true,
      label: 'Country',
    }
  },
  zipCode: {
    'ui:widget': 'Input'
  },
  city: {
    'ui:widget': 'Dropdown',
    'ui:options': {
      search: true,
      selection: true,
      label: 'City',
    }
  },
};

const Schema = {
  type: 'object',
  properties: {
    country: {
      type: 'string',
      title: 'Where do you live?',
      enum: ['Asia', 'Europe', 'United States', 'Other'],
      enumNames: ['Asia', 'Europe', 'United States', 'Other']
    },
    city: {
      title: 'City',
      type: 'string',
      enum: ['us', 'nordic', 'other']
    }
  },
  dependencies: {
    country: {
      oneOf: [
        {
          properties: {
            country: {
              enum: ['Asia']
            }
          }
        },
        {
          properties: {
            country: {
              enum: ['Europe']
            },
            zipCode: {
              title: 'ZipCode',
              type: 'string',
              minLength: 5,
              maxLength: 6
            }
          },
          required: ['zipCode']
        }
      ]
    }
  }
};

export default {
  Schema,
  UISchema
};
