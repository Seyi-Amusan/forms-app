import FormFooter from "../formFooter";
import FormHeader from "../formHeader";  

function StepFour({userChoice}) {
    return (
    <div className="step-container">
        <FormHeader
            heading='Finishing up'
            text='Double-check everything looks okay before confirming'
            />
            
            <div>{ userChoice.stepOne.name }</div>
  

        <FormFooter prev={true} nextRouteUrl='submit' prevRouteUrl='step-Three'/> 

    </div> );
}

export default StepFour;