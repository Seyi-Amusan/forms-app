import { useNavigate } from "react-router-dom";
import FormFooter from "../formFooter";
import FormHeader from "../formHeader";  
import Plan from "../plan";

function StepTwo({ selectedPlans, setSelectedPlans }) {

    const navigate = useNavigate(); 

    // Handle selecting/unselecting a plan
    const handlePlanSelect = (planName) => {
        setSelectedPlans(planName); // Toggle plan selection in App's state
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedPlans.length === 0) {
            alert('Please select at least one plan before proceeding.');
            return;
        }
        navigate('/step-Three'); // Navigate to step 3
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
                        isSelected={selectedPlans.includes('Arcade')}
                        onSelect={handlePlanSelect}
                    />

                    <Plan
                        iconUrl='/images/icon-advanced.svg'
                        name='Advanced'
                        price='$120/yr'
                        timeFree='2 months free'
                        isSelected={selectedPlans.includes('Advanced')}
                        onSelect={handlePlanSelect}
                    />

                    <Plan
                        iconUrl='/images/icon-pro.svg'
                        name='Pro'
                        price='$150/yr'
                        timeFree='2 months free'
                        isSelected={selectedPlans.includes('Pro')}
                        onSelect={handlePlanSelect}
                    />
                </div>

                <div>
                    <FormFooter prev={true} nextRouteUrl='step-Three' prevRouteUrl='step-One' /> 
                </div>
            </form>
        </div>
    );
}

export default StepTwo;
