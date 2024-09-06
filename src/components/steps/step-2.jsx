import { useNavigate } from "react-router-dom";
import FormFooter from "../formFooter";
import FormHeader from "../formHeader";  
import Plan from "../plan";

function StepTwo() {

    const navigate = useNavigate(); // Use useNavigate for programmatic navigation

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('submit'); // Log 'submit' to the console
        navigate('/step-Three'); // Programmatically navigate to the next step
    };

    return (
    <div className="step-container step-two-container">
        <FormHeader
            heading='Select your plan'
            text='You have the option of monthly or yearly billing'
            />
            
            <form onSubmit={handleSubmit}>
                <div className="plans">
                    <Plan
                        iconUrl='/images/icon-arcade.svg'
                        name='Arcade'
                        price='$90/yr'
                        timeFree='2 months free'
                    />

                    <Plan
                        iconUrl='/images/icon-advanced.svg'
                        name='Advanced'
                        price='$120/yr'
                        timeFree='2 months free'
                    />

                    <Plan
                        iconUrl='/images/icon-pro.svg'
                        name='Pro'
                        price='$150/yr'
                        timeFree='2 months free'
                    />
                </div>

                <div>
                      <FormFooter prev={true} nextRouteUrl='step-Three' prevRouteUrl='step-One'/> 
                </div>
                
            </form>

            
  

        

    </div> );
}

export default StepTwo;