import Personnel from '../Schemas/PersonnelSchema';
import Address from '../Schemas/AddressSchema';
import Password from '../Schemas/PasswordSchema';

export const Schema: any = {
  [1]: {
    type: 'object',
    title: 'Step 1',
    properties: { personnel: Personnel.Schema }
  },
  [2]: {
    type: 'object',
    title: 'Step 2',
    properties: { address: Address.Schema }
  },
  [3]: {
    type: 'object',
    title: 'Step 3',
    properties: { password: Password.Schema }
  },
};

export const UISchema: any = {
  address: Address.UISchema,
  personnel: Personnel.UISchema,
};

export const Validation = (formData: any, errors: any) => ({
});
