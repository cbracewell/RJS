import * as React from 'react';
import { connect } from 'react-redux';
import Form from 'react-jsonschema-form';

interface Props {
  formData: any;
}

interface State {
  formData: any;
}

const schema: any = {
  type: 'object',
  title: 'Your Details',
  properties: {
    first_name: { type: 'string', title: 'First name' },
    last_name: { type: 'string', title: 'Last name' },
    age: { type: 'number', min: 18, defaultValue: 18 }
    // todo extend
  }
};

const uiSchema = {
  age: { 'ui:widget': 'updown' }
};

class SimpleFormContainer extends React.Component<Props, State> {
  render() {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
      />
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  SimpleFormContainer
);
