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
    super(props);
  }

  state = { 
    stepOne: {},
    stepTwo: {},
    stepThree: {},
    stepFour: {},
  }
  
  handleFormSubmit = (step, data) => {
    this.setState({
      [step]: data,
    })
  }


  render() { 
    console.log(this.state.stepOne);
    
    return (
      <BrowserRouter>
        <div className="App">
        <div className='container'>
          <SideNav />
          <>
              <Routes>
                <Route
                  index
                  path='/step-One'
                  element={<StepOne onSubmit={(data) => this.handleFormSubmit('stepOne', data)} />}
                />

                <Route
                  path='/step-Two'
                  element={<StepTwo />}
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
