import { UiSchema } from 'react-jsonschema-form';

import Address from './Address';
import Password from './Password';
import Personnel from './Personnel';

export const Schema: any = {
  title: 'A basic form',
  className: '',
  description: 'A form description',
  type: 'object',
  definitions: {
    personnel: Personnel.Schema,
    address: Address.Schema,
    security: Password.Schema
  },
  properties: {
    personnel: {
      title: 'Personnel Details',
      $ref: '#/definitions/personnel'
    },
    billing_address: {
      title: 'Billing Address',
      $ref: '#/definitions/address',
    },
    personnel_address: {
      title: 'Billing Address',
      properties: {
        sameAsBilling: {
          type: 'boolean',
          enum: [true, false]
        }
      },
      dependencies: {
        personnel_address: {
          oneOf: [
            {
              properties: {
                sameAsBilling: {
                  title: 'Same as Billing?',
                  enum: [
                    false
                  ]
                },
                billing_address: {
                  title: 'Personnel Address',
                  $ref: '#/definitions/address',
                },
              },
            }
          ]
        }
      },
      $ref: '#/definitions/address',
    },
    security: {
      title: 'Security',
      $ref: '#/definitions/security',
    },
  }
};

export const UISchema: UiSchema = {
  personnel: Personnel.UISchema,
  billing_address: Address.UISchema,
  security: Password.UISchema
};

export const Validation = (formData: any, errors: any) => ({
  ...Password.validation(formData, errors)
});
