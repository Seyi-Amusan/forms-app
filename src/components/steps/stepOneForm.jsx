import { useNavigate } from 'react-router-dom';
import FormFooter from "../formFooter";
import FormHeader from "../formHeader";

function StepOneForm({ heading, text, fields, nextRouteUrl, prevRouteUrl, showPrev, onSubmit }) {
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit();  // Trigger the parent's onSubmit handler
      navigate(nextRouteUrl);  
    };
  
    return (
      <div className="step-container">
        <FormHeader heading={heading} text={text} />
  
        <form className="step-one-body" onSubmit={handleSubmit}>
          <div className='step-one-fields'>
            {fields.map(({ id, label, type, value, placeholder, onChange }) => (
              <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} value={value} placeholder={placeholder} onChange={onChange} />
              </div>
            ))}
          </div>
  
          <div>
            <FormFooter prev={showPrev} prevRouteUrl={prevRouteUrl} />
          </div>
        </form>
      </div>
    );
  }
  
  export default StepOneForm;
  