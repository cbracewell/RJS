import * as React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { optionsDropdownFormatter } from '../../formUtils';
import { pick } from 'lodash';
export default (props: any) => {
  console.log('props', props);

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

  return (
    <Typeahead {...composedProps} />
  );
};
