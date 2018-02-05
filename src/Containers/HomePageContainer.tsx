import * as React from 'react';
import { connect } from 'react-redux';
import HomeLayout from '../Layouts/HomeLayout/HomeLayout';

interface Props {
  formData: any;
}

interface State {}

class HomeContainer extends React.Component<Props, State> {
  handleSubmission = (change: any) => {
    console.log('handleFormSubmission', change);
  }

  handleError = (errors: any) => {
    console.log(errors.length + ' errors left');
  }

  handleBlur = (values: any) => {
    console.log(values);
  }

  handleChange = (values: any) => {
    console.log(values);
  }

  validate = (formData: any, errors: any) => {
    console.log(errors);

    return errors;
  }

  render() {
    console.log(this.props);
    return (
      <HomeLayout
        onSubmission={this.handleSubmission}
        onError={this.handleError}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        validation={this.validate}
      />
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  formData: state.placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
