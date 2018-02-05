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
import { InputOnChangeData } from 'semantic-ui-react/dist/commonjs/elements/Input/Input';

export const Input = (props: InputProps) => {
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
  console.log('Input props', props);

  const onChange = (e: any, data: any) => {
    console.log(data);
    props.onChange!(e, data.value);
  };

  return (
    <SemanticInput
      {...pick(props, values)}
      {...options}
      onChange={onChange}
    />
  ); 
};

export const TextArea = (props: InputProps) => {
  const values = [
    'type',
    'label',
    'placeholder',
    'readOnly',
    'required'
  ];
  console.log('TextArea', props);
  const { enumOptions, ...options } = props.options;

  return (
    <SemanticTextArea
      {...pick(props, values)}
      {...options}
    />
  ); 
};

export const Dropdown = (props: InputProps) => {
  const values = [
    'type',
    'label',
    'placeholder',
    'readOnly',
    'icon',
    'iconPosition'
  ];
  console.log('Dropdown props ', props);

  const { enumOptions, ...options } = props.options;

  const onChange = (e: any, data: any) => {
    console.log(data);
    props.onChange!(e, data);
  };

  return (
    <SemanticDropdown
      {...pick(props, values)}
      {...options}
      onChange={onChange}
    />
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

// const renderTab = (tabData: TabProps) => {
//   return 
// }

export const Tabs = (props: TabProps) => {
  const panes = [
    { menuItem: 'Tab 1', render: () => <SemanticTab.Pane>Tab 1 Content</SemanticTab.Pane> },
    { menuItem: 'Tab 2', render: () => <SemanticTab.Pane>Tab 2 Content</SemanticTab.Pane> },
    { menuItem: 'Tab 3', render: () => <SemanticTab.Pane>Tab 3 Content</SemanticTab.Pane> },
  ];
  console.log(props);
  const values = [
    'type',
    'label',
    'placeholder',
    'readOnly',
    'icon',
    'iconPosition'
  ];

  return (
    <SemanticTab panes={panes} />
  ); 
};

export default {
  Button,
  Dropdown,
  Input,
  Tabs,
  TextArea
};
