import * as React from 'react';
import { pick } from 'lodash';
import {
  Input as SemanticInput,
  InputProps
} from 'semantic-ui-react';

export default (props: any) => {
  const values = [
    'autoFocus',
    'type',
    'label',
    'placeholder',
    'readOnly',
    'required',
    'icon',
    'iconPosition'
  ];
  const { enumOptions, ...options } = props.options;

  const composedProps = {
    ...pick(props, values),
    ...options,
    onChange: (e: any, { value }: InputProps) => props.onChange!(value)
  };

  return (
    <SemanticInput {...composedProps} />
  ); 
};
