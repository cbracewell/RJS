import * as React from 'react';
import { connect } from 'react-redux';
import Form from 'react-jsonschema-form';
import { Schema, UISchema } from '../Schemas/StepperSchema';
import widgets from '../Components/CustomComponents';

interface Props {
  formData: any;
}

interface State {
  formData: any;
  step: number;
  stepCount: number;
}

class StepperContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      step: 1,
      formData: {},
      stepCount: Object.keys(Schema).length
    };
  }

  handleNext = ({formData}: any) => {
    if (this.state.step !== this.state.stepCount) {
      this.setState({
        step: this.state.step + 1
      });
    } else {
      console.log('Submitting stuff');
    }
  }

  handleChange = ({formData}: any) => {
    this.setState({
      formData: {
        ...this.state.formData, 
        ...formData
      }, 
    });
  }

  handleBack = (e: any) => {
    if (this.state.step !== 1) {
      this.setState({
        step: this.state.step - 1
      });
    }
  }

  render() {
    console.log('UISchema', UISchema);
    
    return (
      <Form 
        schema={Schema[this.state.step]}
        onChange={this.handleChange}
        uiSchema={UISchema}
        onSubmit={this.handleNext}
        formData={this.state.formData}
        widgets={widgets}
      >
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" onClick={this.handleBack} className="btn btn-secondary">Back</button>
          <button type="submit" className="btn btn-primary">Next</button>
        </div>
      </Form>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  formData: state.placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(StepperContainer);
