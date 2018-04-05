import * as React from 'react';
import { connect } from 'react-redux';
import Form, { ObjectFieldTemplateProps } from 'react-jsonschema-form';
import customWidgets from '../Components/CustomComponents';
import { Schema, UISchema, Validation } from '../Schemas/LoginSchema';
import { Schema as SignUpSchema, UISchema as SignUpUISchema } from '../Schemas/SignUpSchema';

interface Props {
  formData: any;
}

interface State {
  inLogin: boolean;
}

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
  constructor(props: Props) {
    super(props);
    this.state = { inLogin: true };
  }
  handleSubmission = (change: any) => {
    console.log('handleFormSubmission', change);
  }

  handleError = (errors: any) => {
    errors.map((error: any, index: number) => console.log(`${index + 1} - ${error.stack}`));
  }

  handleBlur = (id: any, value: any) => {
    console.log(id, value);
  }

  handleToggle = () => {
    this.setState({ inLogin: this.state.inLogin ? false : true });
  }

  render() {
    const { inLogin } = this.state;
    return (
      <div className="container">
        <Form
          schema={inLogin ? Schema : SignUpSchema}
          uiSchema={inLogin ? UISchema : SignUpUISchema}
          validate={inLogin ? Validation : undefined}
          ObjectFieldTemplate={inLogin ? ObjectFieldTemplate : undefined}
        >
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" onClick={this.handleToggle} className="btn btn-primary">Click here to {inLogin ? 'register' : 'login'}</button>
            <button type="button" className="btn btn-secondary">{inLogin ? 'Login' : 'Register'}</button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  formData: state.placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
