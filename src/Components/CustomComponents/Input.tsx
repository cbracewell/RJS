import * as React from 'react';
import { pick } from 'lodash';
import { FormControl, FormControlProps, FormGroup, FormGroupProps, HelpBlock } from 'react-bootstrap';

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
    onChange: (e: any, { value }: FormControlProps) => props.onChange!(value)
  };

  return (
    <FormGroup>
      <FormControl {...composedProps} />
      <HelpBlock />
    </FormGroup>
  ); 
};
