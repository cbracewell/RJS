import * as React from 'react';
import { connect } from 'react-redux';
import Form, { ObjectFieldTemplateProps } from 'react-jsonschema-form';
import customWidgets from '../Components/CustomComponents';
import { Schema, UISchema, Validation } from '../Schemas/LoginSchema';

interface Props {
  formData: any;
}

interface State {}

function getProperty(properties: ObjectFieldTemplateProps['properties'], name: string) {
  const element = properties.find(prop => prop.name === name);
  return element ? element.content : null;
}

function ObjectFieldTemplate({title, description, properties}: ObjectFieldTemplateProps) {
  return (
    <div className="container">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="row">
        {properties.map((prop, i) => (
          <div key={i} className="col-md-6">{prop.content}</div>
        ))}
      </div>
    </div>
  );
}

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
    console.log(formData);
  }

  render() {
    // todo swap out for a signup
    return (
      <Form
        schema={Schema}
        uiSchema={UISchema}
        validate={Validation}
        ObjectFieldTemplate={ObjectFieldTemplate}
      />
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  formData: state.placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
