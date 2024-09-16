import { useNavigate } from "react-router-dom";
import FormFooter from "../formFooter";
import FormHeader from "../formHeader";  
import Plan from "../plan";

function StepTwo({ selectedPlan, setSelectedPlan }) {

    const navigate = useNavigate(); 

    // Handle selecting a plan (only one plan can be selected)
    const handlePlanSelect = (planName) => {
        setSelectedPlan(planName); // Update the selected plan in App's state
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedPlan) {
            alert('Please select a plan before proceeding.');
            return;
        }
        navigate('/step-Three'); 
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
                        iconUrl='images/icon-arcade.svg'
                        name='Arcade'
                        price='$90/yr'
                        timeFree='2 months free'
                        isSelected={selectedPlan === 'Arcade'}
                        onSelect={handlePlanSelect}
                    />

                    <Plan
                        iconUrl='images/icon-advanced.svg'
                        name='Advanced'
                        price='$120/yr'
                        timeFree='2 months free'
                        isSelected={selectedPlan === 'Advanced'}
                        onSelect={handlePlanSelect}
                    />

                    <Plan
                        iconUrl='images/icon-pro.svg'
                        name='Pro'
                        price='$150/yr'
                        timeFree='2 months free'
                        isSelected={selectedPlan === 'Pro'}
                        onSelect={handlePlanSelect}
                    />
                </div>

                <div>
                    <FormFooter nextRouteUrl="step-Three" prevRouteUrl="step-One" /> 
                </div>
            </form>
        </div>
    );
}

export default StepTwo;
