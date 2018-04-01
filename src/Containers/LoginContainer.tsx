import * as React from 'react';
import { connect } from 'react-redux';
import Form from 'react-jsonschema-form';
import customWidgets from '../Components/CustomComponents';
import { Schema, UISchema, Validation } from '../Schemas/LoginSchema';

interface Props {
  formData: any;
}

interface State {}

class LoginContainer extends React.Component<Props, State> {
  handleSubmission = (change: any) => {
    console.log('handleFormSubmission', change);
  }

  handleError = (errors: any) => {
    errors.map((error: any, index: number) => console.log(`${index + 1} - ${error.stack}`));
  }

  handleBlur = (id: any, value: any) => {
    console.log(id, value);
  }

  handleChange = (formData: any) => {
    // console.log(formData);
  }

  render() {
    return (
      <Form
        schema={Schema}
        uiSchema={UISchema}
        validate={Validation}
      />
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  formData: state.placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
