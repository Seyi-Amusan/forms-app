import './App.css';
import { Component } from 'react';
import SideNav from './components/sideNav';
import StepOne from './components/steps/step-1';
import StepTwo from './components/steps/step-2';
import StepThree from './components/steps/step-3';
import StepFour from './components/steps/step-4';
import Submit from './components/submit';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      //step one
      stepOne: {},
  
      //step two
      selectedPlans: [],
  
      stepThree: {},
      stepFour: {},
    }
  
    // Binding the method to update selected plan
    this.setSelectedPlans = this.setSelectedPlans.bind(this);
  }

  //step two
  // Method to toggle plan selection (add/remove plan)
  setSelectedPlans(plan) {
    this.setState((prevState) => {
      if (prevState.selectedPlans.includes(plan)) {
        // If the plan is already selected, remove it
        return {
          selectedPlans: prevState.selectedPlans.filter(p => p !== plan),
        };
      } else {
        // If the plan is not selected, add it
        return {
          selectedPlans: [...prevState.selectedPlans, plan],
        };
      }
    });
  }
  

  //step one
  handleStepOneFormSumbit = (step, data) => {
    this.setState({
      [step]: data,
    })
  }


  render() { 
    return (
      <BrowserRouter>
        <div className="App">
        <div className='container'>
          <SideNav />
          <>
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/step-one" />} />
                
                <Route
                  index
                  path='/step-One'
                  element={<StepOne onSubmit={(data) => this.handleStepOneFormSumbit('stepOne', data)} />}
                />

                <Route
                  path='/step-Two'
                  element={<StepTwo
                    selectedPlans={this.state.selectedPlans}
                    setSelectedPlans={this.setSelectedPlans}
                  />}
                />

                <Route
                  path='/step-Three'
                  element={<StepThree />}
                />

                <Route
                  path='/step-Four'
                  element={<StepFour userChoice={this.state} />}
                />
                
                <Route
                  path='/submit'
                  element={<Submit />}
                />
              </Routes>
          </>
        </div>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
