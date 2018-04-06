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
      alert('Submitting all the things');
    }
  }

  handleStepSelection = (step: any) => (e: any) => {
    this.setState({ step });
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
    const { formData, step, stepCount } = this.state;
    return (
      <Form 
        schema={Schema[step]}
        uiSchema={UISchema}
        onChange={this.handleChange}
        onSubmit={this.handleNext}
        formData={formData}
        widgets={widgets}
      >
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" disabled={step === 1} onClick={this.handleBack} className="btn btn-secondary">Back</button>
          {Object.keys(Schema).map((item, i) => (<button type="button" key={i} onClick={this.handleStepSelection(i + 1)}>{i + 1}</button>))}
          <button type="submit" className="btn btn-primary">{step === stepCount ? 'Submit' : 'Next'}</button>
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
