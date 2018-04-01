import Address from './AddressSchema';
import Password from './PasswordSchema';
import Personnel from './PersonnelSchema';

export const Schema: any = {
  'title': 'Checkout',
  'description': 'An example checkout form.',
  'type': 'object',
  'definitions': {
    'personnel': Personnel.Schema,
    'address': Address.Schema
  },
  properties: {
    personnel: { '$ref': '#/definitions/personnel' },
    delivery_address: { '$ref': '#/definitions/address' },
    same_as_delivery: {
      type: 'boolean',
      title: 'Does billing address match delivery address?'
    },
    billing_address: {
      title: 'Billing Address',
      '$ref': '#/definitions/address'
    },
  },
  dependencies: {
    same_as_delivery: {
      properties: {
        billing_address: Address.Schema
      },
      required: ['billing_address']
    }
  }
};

export const UISchema: any = {
  personnel: Personnel.UISchema,
  delivery_address: Address.UISchema,
  same_as_delivery: {
    'ui:widget': 'checkbox',
    'ui:options': {
      inline: true
    }
  }
};

export const Validation = (formData: any, errors: any) => ({
});
