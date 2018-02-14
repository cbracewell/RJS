import * as React from 'react';
import { flow } from 'lodash';
import { connect } from 'react-redux';
import HomeLayout from '../Components/Layouts/HomeLayout';

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

  handleBlur = (values: any) => {
    console.log(values);
  }

  handleChange = (formData: any) => {
    // console.log(values);
  }

  render() {
    return (
      <HomeLayout
        onSubmission={this.handleSubmission}
        onError={this.handleError}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
      />
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  formData: state.placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
