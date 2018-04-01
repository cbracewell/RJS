import * as React from 'react';
import { connect } from 'react-redux';
import Form from 'react-jsonschema-form';
import customWidgets from '../Components/CustomComponents';
import { Schema, UISchema, Validation } from '../Schemas/CheckoutSchema';

interface Props {
  formData: any;
}

interface State {}

class HomeContainer extends React.Component<Props, State> {
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
        className="basic_form"
        onError={this.handleError}
        onSubmit={this.handleSubmission}
        onChange={this.handleChange}
        schema={Schema}
        uiSchema={UISchema}
        validate={Validation}
        widgets={customWidgets}
      >
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </Form>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  formData: state.placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
