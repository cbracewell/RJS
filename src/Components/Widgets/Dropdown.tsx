import { optionsDropdownFormatter, enumDropdownFormatter } from '../../formUtils';
import * as React from 'react';
import { pick } from 'lodash';
import {
  Dropdown as SemanticDropdown,
  DropdownProps
} from 'semantic-ui-react';

export default (props: any) => {
  const values = [
    'autoFocus',
    'icon',
    'iconPosition',
    'label',
    'placeholder',
    'readOnly',
    'type'
  ];

  const { enumOptions, displaylabel, ...options } = props.options;
  let optionResult = [];
  if (enumOptions) {
    optionResult = enumDropdownFormatter(enumOptions);
  } else {
    optionResult = optionsDropdownFormatter(enumOptions);
  }

  const composedProps = {
    ...pick(props, values),
    ...options,
    options: optionResult,
    onChange: (e: any, { value }: DropdownProps) => props.onChange(value)
  };

  return (
    <SemanticDropdown {...composedProps} />
  ); 
};
