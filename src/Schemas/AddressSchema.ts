import { countries } from '../data';

const Schema = {
  type: 'object',
  title: 'Address',
  properties: {
    country: {
      type: 'string',
      title: 'Country'
    },
    city: {
      title: 'City',
      type: 'string'
    }
  }
};

const UISchema = {
  'ui:order': [
    'country',
    'city'
  ],
  country: {
    'ui:widget': 'Typeahead',
    'ui:options': {
      label: 'Country',
      options: countries
    }
  }
};

export default {
  Schema,
  UISchema
};
