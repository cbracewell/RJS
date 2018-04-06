import { countries } from '../data';

const Schema = {
  type: 'object',
  title: 'Address',
  properties: {
    country: { type: 'string', title: 'Country' }
  },
  dependencies: {
    country: {
      oneOf: [
        {
          properties: {
            country: { enum: [ 'United Kingdom' ] },
            postcode: {
              title: 'Postcode',
              type: 'string',
              pattern: '([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})'
            },
            city: { title: 'City', type: 'string' },
            address_one: { title: 'Address Line 1', type: 'string' },
            address_two: { title: 'Address Line 2', type: 'string' },
          }
        },
        {
          properties: {
            country: { enum: [ 'United States' ] },
            zip_code: {
              title: 'Zip Code',
              type: 'string',
              pattern: '^\d{5}(?:[-\s]\d{4})?$'
            },
            city: { title: 'City', type: 'string' },
            address_one: { title: 'Address Line 1', type: 'string' },
            address_two: { title: 'Address Line 2', type: 'string' },
          }
        }
      ]
    }
  }
};

const UISchema = {
  'ui:order': [ 'country', '*' ],
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
