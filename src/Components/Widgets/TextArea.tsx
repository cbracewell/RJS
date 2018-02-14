import * as React from 'react';
import { pick } from 'lodash';
import { TextArea as SemanticTextArea, TextAreaProps } from 'semantic-ui-react';

export default (props: any) => {
  const values = [
    'type',
    'label',
    'placeholder',
    'readOnly',
    'required'
  ];

  const { enumOptions, displaylabel, ...options } = props.options;
  const onChange = (e: any, { value }: TextAreaProps) => {
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
