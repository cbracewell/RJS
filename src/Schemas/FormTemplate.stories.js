import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from 'react-jsonschema-form';
import Address from './Address.ts';
import Password from './PasswordForm.ts';

storiesOf('Form Templates', module)
  .add('Address', () => (
    <Form
      className="basic_form"
      onChange={(value) => console.log(value)}
      onError={(value) => console.log(value)}
      onSubmit={(value) => console.log(value)}
      schema={Address.Schema}
      uiSchema={Address.UISchema}
    />
  ));
