import * as React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { optionsDropdownFormatter } from '../../formUtils';
import { pick } from 'lodash';
export default (props: any) => {
  const {
    placeholder,
    autoFocus,
    label: labelKey,
    onChange,
    options: {
      options
    }
  } = props;

  const composedProps = {
    options,
    placeholder
  };
  console.log('Typeahread');
  
  return (
    <Typeahead {...composedProps} />
  );
};
