import Address from './AddressSchema';
import Password from './PasswordSchema';
import Personnel from './PersonnelDetailsSchema';

export const Schema: any = {
  title: 'Delivery',
  description: 'An example delivery form.',
  type: 'object',
  definitions: {
    personnel: Personnel.Schema,
    address: Address.Schema
  },
  required: [ 'delivery_address' ],
  properties: {
    personnel: { title: 'Your details', '$ref': '#/definitions/personnel' },
    delivery_address: { displayLabel: false, '$ref': '#/definitions/address' },
    same_as_delivery: {
        title: 'Does the billing address match your delivery?',
        type: 'boolean',
        default: 'Yes'
    }
  },
  dependencies: {
    same_as_delivery: {
      oneOf: [
        {
          properties: {
            same_as_delivery: { enum: [ true ] }
          }
        },
        {
          properties: {
            same_as_delivery: { enum: [ false ] },
            billing_address: { title: 'Billing Address', '$ref': '#/definitions/address' },
          }
        }
      ]
    }
  }
};

export const UISchema: any = {
  personnel: Personnel.UISchema,
  delivery_address: Address.UISchema,
  billing_address: Address.UISchema,
  same_as_delivery: {
    'ui:widget': 'checkbox',
    'ui:options': {
      inline: true,
      displayLabel: false
    }
  },
  password: Password.UISchema,
};

export const Validation = (formData: any, errors: any) => ({});
