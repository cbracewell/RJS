import { optionsDropdownFormatter } from '../../formUtils';
import * as React from 'react';
import { pick } from 'lodash';
import {
  Radio as SemanticRadio,
  RadioProps
} from 'semantic-ui-react';

export const Radio = (props: any) => {
  console.log(props);
  const values = [
    'id',
    'autoFocus',
    'disabled',
    'label',
    'placeholder',
    'readOnly',
    'required'
  ];

  const { enumOptions, displaylabel, ...options } = props.options;

  const composedProps = {
    ...pick(props, values),
    ...options,
    options: optionsDropdownFormatter(enumOptions),
    onChange: (e: any, { value }: RadioProps) => props.onChange(value)
  };

  return (
    <SemanticRadio {...composedProps} />
  ); 
};

export default (props: any) => {
  return <Radio />;
};
