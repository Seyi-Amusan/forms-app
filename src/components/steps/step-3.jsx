import AddOn from "../addOn";
import FormFooter from "../formFooter";
import FormHeader from "../formHeader";  
import { useNavigate } from "react-router-dom";

function StepThree() {

    const navigate = useNavigate(); // Use useNavigate for programmatic navigation

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('submit'); // Log 'submit' to the console
        navigate('/step-Four'); // Programmatically navigate to the next step
    };

    return (
    <div className="step-container">
        <FormHeader
            heading='Pick add-ons'
            text='Add-ons help enhance your gaming experience'
        />
            
        <form onSubmit={handleSubmit}>
                <AddOn
                    heading='Online service'
                    text='Access to multiplayer games'
                    price='+$1/mo'
                />

                <AddOn
                    heading='Larger storage'
                    text='Extra 1TB of cloud save'
                    price='+$2/mo'
                />

                <AddOn
                    heading='Customizable profile'
                    text='Custom theme on your profile'
                    price='+$1/mo'
                />

                <div>
                    <FormFooter prev={true} nextRouteUrl='step-Four' prevRouteUrl='step-Two' />
                </div>
        </form>
  


    </div> );
}

export default StepThree;