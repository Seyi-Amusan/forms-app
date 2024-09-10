import AddOn from "../addOn";
import FormFooter from "../formFooter";
import FormHeader from "../formHeader";  
import { useNavigate } from "react-router-dom";

function StepThree({ selectedAddOns, setSelectedAddOns }) {

    

    const navigate = useNavigate(); // Use useNavigate for programmatic navigation

    // Handle selecting/unselecting an add-on
    const handleAddOnSelect = (addOnName) => {
        setSelectedAddOns(addOnName); // Toggle the add-on in App.js state
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (selectedAddOns.length === 0) {
            alert('Please select at least one add-on before proceeding.');
            return;
        }
        navigate('/step-Four'); // Navigate to the next step
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
                    isSelected={selectedAddOns.includes('Online service')}
                    onSelect={handleAddOnSelect}
                />

                <AddOn
                    heading='Larger storage'
                    text='Extra 1TB of cloud save'
                    price='+$2/mo'
                    isSelected={selectedAddOns.includes('Larger storage')}
                    onSelect={handleAddOnSelect}
                />

                <AddOn
                    heading='Customizable profile'
                    text='Custom theme on your profile'
                    price='+$1/mo'
                    isSelected={selectedAddOns.includes('Customizable profile')}
                    onSelect={handleAddOnSelect}
                />

                <div>
                    <FormFooter nextRouteUrl='step-Four' prevRouteUrl='step-Two' />
                </div>
        </form>
    </div>
    );
}

export default StepThree;
