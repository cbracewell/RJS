import * as React from 'react';
import Form from 'react-jsonschema-form';
import { Button } from 'semantic-ui-react';
import { Schema } from './Schema';
import { UISchema } from './UISchema';
import widgets from '../../Widgets/Widgets';
import fields from '../../Widgets/Fields';

interface Props {
  onSubmission: any;
  onError: any;
  onBlur: any;
  onChange: any;
  validation: any;
}

interface State {}

class HomeLayout extends React.Component<Props, State> {

render() {
  const { onSubmission, onError, onBlur, onChange, validation } = this.props;

  return (
      <div style={styles}>
        <Form
          className="homepage_form"
          fields={fields}
          // liveValidate={true}
          onChange={onChange}
          onError={onError}
          onSubmit={onSubmission}
          schema={Schema}
          uiSchema={UISchema}
          validate={validation}
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
  homepage_form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 20px [col - start]) 5 %'
  }
};

export default HomeLayout;
