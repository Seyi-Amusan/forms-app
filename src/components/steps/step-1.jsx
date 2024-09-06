import React, { Component } from 'react';
import StepForm from './stepForm';

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        phoneNumber: '',
      },
    };
  }


  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleSubmit = () => {
      console.log(this.props);
      
    this.props.onSubmit(this.state.formData);
  };

  render() {
    const { formData } = this.state;

    const fields = [
      { id: 'name', label: 'Name', type: 'text', value: formData.name, placeholder: 'e.g Stephen King', onChange: this.handleChange },
      { id: 'email', label: 'Email Address', type: 'email', value: formData.email, placeholder: 'e.g StephenKinggmail.com', onChange: this.handleChange },
      { id: 'phoneNumber', label: 'Phone Number', type: 'text', value: formData.phoneNumber, placeholder: 'e.g + 256 257 258', onChange: this.handleChange },
    ];

    return (
      <StepForm
        heading="Personal Info"
        text="Please provide your name, email address, and phone number"
        fields={fields}
        nextRouteUrl="/step-Two"
        onSubmit={this.handleSubmit}
        showPrev={false}
      />
    );
  }
}

export default StepOne;
