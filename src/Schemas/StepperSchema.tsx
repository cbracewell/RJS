import Personnel from '../Schemas/PersonnelDetailsSchema';
import Address from '../Schemas/AddressSchema';
import Password from '../Schemas/PasswordSchema';

export const Schema: any = {
  [1]: {
    type: 'object',
    definitions: { personnel: Personnel.Schema },
    properties: {
      personnel: {
        title: 'Step 1 - Your address',
        '$ref': '#/definitions/personnel'
      }
     }
  },
  [2]: {
    type: 'object',
    definitions: { address: Address.Schema, },
    properties: {
      address: {
        title: 'Step 2 - Your address',
        '$ref': '#/definitions/address'
      }
     }
  },
  [3]: {
    type: 'object',
    definitions: { password: Password.Schema },
    properties: {
      password: {
        title: 'Step 3 - Your password',
        '$ref': '#/definitions/password'
      }
     }
  },
};

export const UISchema: any = {
  address: Address.UISchema,
  personnel: Personnel.UISchema,
  password: Password.UISchema,
};

export const Validation = (formData: any, errors: any) => ({
});
