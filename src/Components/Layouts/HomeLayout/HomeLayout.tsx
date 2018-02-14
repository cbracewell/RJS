import * as React from 'react';
import Form from 'react-jsonschema-form';
import { Button } from 'semantic-ui-react';

import { Schema, UISchema, Validation } from '../../FormSchema/BasicForm';
import widgets from '../../Widgets/';
import fields from '../../Widgets/Fields';

interface Props {
  onSubmission: any;
  onError: any;
  onBlur: any;
  onChange: any;
}

interface State {}

class HomeLayout extends React.Component<Props, State> {

render() {
  const { onSubmission, onError, onBlur, onChange } = this.props;

  return (
      <div style={styles}>
        <Form
          className="basic_form"
          fields={fields}
          onChange={onChange}
          onError={onError}
          onSubmit={onSubmission}
          schema={Schema}
          uiSchema={UISchema}
          validate={Validation}
          widgets={widgets}
        >
          <Button type="submit">Submit</Button>
          <Button type="button">Cancel</Button>
        </Form>
      </div>
    ); 
  }
}
const styles = {
};

export default HomeLayout;
