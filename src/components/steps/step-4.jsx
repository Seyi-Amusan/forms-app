import { useNavigate } from "react-router-dom";
import FormFooter from "../formFooter";
import FormHeader from "../formHeader";  

function StepFour({ userChoice }) {
    
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate('/submit');
    };

    return (
    <form className="step-container" onSubmit={handleSubmit}>
        <FormHeader
            heading='Finishing up'
            text='Double-check everything looks okay before confirming'
            />

        <FormFooter prev={true} nextRouteUrl='submit' prevRouteUrl='step-Three'/> 

    </form> );
}

export default StepFour;