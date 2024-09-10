import { useNavigate } from "react-router-dom";
import FormFooter from "../formFooter";
import FormHeader from "../formHeader";  

function StepFour(props) {

    const { selectedPlan, selectedAddOns } = props.userChoice

    //to get the price of the selected plan
    let selectedPlanPrice;

    switch (selectedPlan) {
        case 'Arcade':
            selectedPlanPrice = '$90'
        break;
    
        case 'Advanced':
            selectedPlanPrice = '$120'
        break;
    
        case 'Pro':
            selectedPlanPrice = '$150'
            break;
        
        default:
            selectedPlanPrice = '$0'
    }
    
    
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

            <div className="user-choice">
                <div className="selected-plan-container">
                    <p>{ selectedPlan }</p>
                    <p>{ selectedPlanPrice }</p>
                </div>

                <hr />

                <div>
                    {selectedAddOns.map((addOn) => {
                        return  <div className="selected-addon-container">
                                    <p>{addOn}</p>
                                </div>
                    })}
                </div>
            </div>

        <FormFooter nextRouteUrl='submit' prevRouteUrl='step-Three'/> 

    </form> );
}

export default StepFour;