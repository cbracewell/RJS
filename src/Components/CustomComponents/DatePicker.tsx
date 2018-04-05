import * as React from 'react';
// const DatePicker = require('react-bootstrap-date-picker');

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

  const composedProps: any = {
    autoFocus: false,
    onChange: (rawDate: any, formattedDate: any) => onChange(formattedDate),
    value: new Date().toISOString(),
    maxDate: new Date().toISOString(),
    defaultValue: new Date().toISOString()
  };
  
  return (
    <div>wljehgb</div>
  );
};
