import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
//import CultivatorFacilityPage from './containers/CultivatorFacilityPage/CultivatorFacilityPage';
import CanebizNexus from './containers/CanebizNexus/CanebizNexus';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div>
          {/* The Start Screen is Nexus, which we do not define in App */}
        <CanebizNexus />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
