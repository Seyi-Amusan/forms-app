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

  
