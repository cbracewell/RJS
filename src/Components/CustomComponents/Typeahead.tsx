import * as React from 'react';
import { Typeahead, TypeaheadProps } from 'react-bootstrap-typeahead';

export default (props: any) => {
  const {
    label: labelKey,
    onChange,
    value: defaultInputValue,
    options: {
      enumValues,
      options
    },
    ...rest
  } = props;

  const composedProps: TypeaheadProps<any> = {
    defaultInputValue,
    labelKey,
    onChange: (value: string[]) => onChange(value[0]),
    options,
    ...rest
  };
  
  return (
    <Typeahead {...composedProps} />
  );
};
