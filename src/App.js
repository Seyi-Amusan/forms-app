import './App.css';
import { Component } from 'react';
import SideNav from './components/sideNav';
import StepOne from './components/steps/step-1';
import StepTwo from './components/steps/step-2';
import StepThree from './components/steps/step-3';
import StepFour from './components/steps/step-4';
import Submit from './components/submit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      //step two
      selectedPlan: '', // Changed from array to a single string
  
      //step three
      selectedAddOns: [] // Still an array for multiple add-ons
    }
  
    // Binding the methods
    this.setSelectedPlan = this.setSelectedPlan.bind(this);
    this.setSelectedAddOns = this.setSelectedAddOns.bind(this);
  }

  //step two
  // Method to set a single selected plan
  setSelectedPlan(plan) {
    this.setState({
      selectedPlan: plan // Store only the selected plan as a string
    });
  }

  //step three
  // Method to toggle add-on selection (add/remove add-on)
  setSelectedAddOns(addOn) {
    this.setState((prevState) => {
      if (prevState.selectedAddOns.includes(addOn)) {
        return {
          selectedAddOns: prevState.selectedAddOns.filter(a => a !== addOn),
        };
      } else {
        return {
          selectedAddOns: [...prevState.selectedAddOns, addOn],
        };
      }
    });
  }
  
  render() { 
    return (
      <BrowserRouter basename='forms-app'>
        <div className="App">
          <div className='container'>
            <SideNav />
            <>
              <Routes>
                <Route path="/" element={<StepOne />} />
                <Route index path='/step-One' element={<StepOne />} />

                {/* Pass selectedPlan as a string and setSelectedPlan */}
                <Route
                  path='/step-Two'
                  element={<StepTwo
                    selectedPlan={this.state.selectedPlan}
                    setSelectedPlan={this.setSelectedPlan}
                  />}
                />

                <Route
                  path='/step-Three'
                  element={<StepThree
                    selectedAddOns={this.state.selectedAddOns}
                    setSelectedAddOns={this.setSelectedAddOns}
                  />}
                />

                {/* Pass user choices to StepFour */}
                <Route path='/step-Four' element={<StepFour userChoice={this.state} />} />
                
                <Route path='/submit' element={<Submit />} />
              </Routes>
            </>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
