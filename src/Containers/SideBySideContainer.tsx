import * as React from 'react';
import { connect } from 'react-redux';
import Form from 'react-jsonschema-form';

interface Props {
  formData: any;
}

interface State {
  schema: any;
  formData: any;
}

const schema: any = {
  type: 'object',
  title: 'Your Details',
  properties: {
    first_name: { type: 'string', title: 'First name' },
    last_name: { type: 'string', title: 'Last name' },
    age: { type: 'number', title: 'Age' }
  }
};

const uiSchema = {
  age: { 'ui:widget': 'updown' }
};

const uiSchemaReadOnly = {
  first_name: { 'ui:readonly': true },
  last_name: { 'ui:readonly': true },
  age: { 'ui:readonly': true },
};

class SimpleFormContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      formData: {},
      schema
    };
  }

  handleChange = ({ formData }: any) => {
    this.setState({
      formData
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-md-6">
          <Form 
            schema={schema}
            uiSchema={uiSchema}
            onChange={this.handleChange}
            formData={this.state.formData}
          />
        </div>
        <div className="col-md-6">
          <Form
            schema={{ ...this.state.schema, title: 'Read Only' }}
            uiSchema={uiSchemaReadOnly}
            formData={this.state.formData}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  SimpleFormContainer
);
