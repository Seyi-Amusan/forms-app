import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormFooter from '../formFooter';
import FormHeader from '../formHeader';


function StepOne() {

  const fields = [
    { id: 'name', label: 'Name', type: 'text',  placeholder: 'e.g Stephen King' },
    { id: 'email', label: 'Email Address', type: 'email',  placeholder: 'e.g StephenKing@gmail.com' },
    { id: 'phoneNumber', label: 'Phone Number', type: 'text', placeholder: 'e.g + 256 257 258' },
  ];

  const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/step-Two');  
    };

    return (
      <div className="step-container">
        <FormHeader heading="Personal Info"
          text="Please provide your name, email address, and phone number"
        />
  
        <form className="step-one-body" onSubmit={handleSubmit}>
          <div className='step-one-fields'>
            {fields.map(({ id, label, type, value, placeholder }) => (
              <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} value={value} placeholder={placeholder} required/>
              </div>
            ))}
          </div>
  
          <div>
            <FormFooter />
          </div>
        </form>
      </div>
    );
}

export default StepOne;

  


// class StepOne extends Component {
  // constructor(props) {
  //   super(props);
    
  //   this.state = {
  //     formData: {
  //       name: '',
  //       email: '',
  //       phoneNumber: '',
  //     },
  //   };
  // }


  // handleChange = (e) => {
  //   this.setState({
  //     formData: {
  //       ...this.state.formData,
  //       [e.target.id]: e.target.value,
  //     },
  //   });
  // };

  // handleSubmit = () => {      
  //   this.props.onSubmit(this.state.formData);
  // };

//   render() {
//     const { formData } = this.state;

//     const fields = [
//       { id: 'name', label: 'Name', type: 'text', value: formData.name, placeholder: 'e.g Stephen King', onChange: this.handleChange },
//       { id: 'email', label: 'Email Address', type: 'email', value: formData.email, placeholder: 'e.g StephenKing@gmail.com', onChange: this.handleChange },
//       { id: 'phoneNumber', label: 'Phone Number', type: 'text', value: formData.phoneNumber, placeholder: 'e.g + 256 257 258', onChange: this.handleChange },
//     ];

//     return (
//       <StepOneForm
//         heading="Personal Info"
//         text="Please provide your name, email address, and phone number"
//         fields={fields}
//         nextRouteUrl="/step-Two"
//         onSubmit={this.handleSubmit}
//       />
//     );
//   }
// }

// export default StepOne;
