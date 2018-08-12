import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';



import Layout from './components/Layout/Layout';
import CultivatorFacilityPage from './containers/CultivatorFacilityPage/CultivatorFacilityPage';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div>
        <Layout>
          <CultivatorFacilityPage/>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
