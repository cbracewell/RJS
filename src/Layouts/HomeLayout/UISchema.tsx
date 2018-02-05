import { UiSchema } from 'react-jsonschema-form';

const dropdownFormatter = (arr: string[]) => arr.map(item => ({
  key: item, value: item, text: item
}));

export const UISchema: UiSchema = {
  fullName: {
    firstName: {
      'ui:widget': 'Input'
    },
    lastName: {
      'ui:widget': 'Input'
    }
  },
  city: {
    'ui:widget': 'Dropdown',
    'ui:options': {
      displayLabel: false,
      search: true,
      selection: true,
      label: 'City',
      options: dropdownFormatter(['London', 'Glasgow', 'Manchester', 'Paris'])
    }
  },
  age: {
    'ui:widget': 'range'
  },
  passwordOne: {
    'ui:widget': 'Input'
  },
  passwordTwo: {
    'ui:widget': 'Input'
  },
  date: {
    'ui:widget': 'alt-datetime'
  }
};
