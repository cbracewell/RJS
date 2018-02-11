import * as React from 'react';
import { pick } from 'lodash';
import {
  Input as SemanticInput,
  InputProps,
  Button as SemanticButton,
  ButtonProps,
  TextArea as SemanticTextArea,
  TextAreaProps,
  Dropdown as SemanticDropdown,
  DropdownProps,
  Tab as SemanticTab,
  TabProps
} from 'semantic-ui-react';

export const Input = (props: any) => {
  const values = [
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

export const TextArea = (props: any) => {
  const values = [
    'type',
    'label',
    'placeholder',
    'readOnly',
    'required'
  ];

  const { enumOptions, displayLabel, ...options } = props.options;
  const onChange = (e: any, { value }: InputProps) => {
    props.onChange(value);
  };

  return (
    <SemanticTextArea
      {...pick(props, values)}
      {...options}
      onChange={onChange}
    />
  ); 
};

export const Dropdown = (props: any) => {
  const values = [
    'type',
    'label',
    'placeholder',
    'readOnly',
    'icon',
    'iconPosition'
  ];

  const { enumOptions, displayLabel, ...options } = props.options;

  const resultProps = {
    ...pick(props, values),
    ...options,
    onChange: (e: any, { value }: InputProps) => props.onChange(value)
  };

  return (
    <SemanticDropdown {...resultProps} />
  ); 
};

export const Button = (props: InputProps) => {
  console.log('buttonprops = ', props);
  const values = [
    'type',
    'label',
    'placeholder',
    'readOnly',
    'icon',
    'iconPosition'
  ];

  return (
    <SemanticButton
      {...pick(props, values)}
      {...props.options}
    />
  ); 
};

export default {
  Button,
  Dropdown,
  Input,
  TextArea
};
